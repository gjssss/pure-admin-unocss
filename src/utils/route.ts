import type { components } from '~types/schema'
import type { Router } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { cloneDeep, flatten, isArray, set } from 'lodash-es'

type ServerMenu = components['schemas']['system.SysMenu']

const Layout = () => import('@/layout/index.vue')
const pageModule = import.meta.glob('/src/views/**/*.{vue,tsx}')
const pageList = Object.keys(pageModule)

function mountProperty(obj: object, prop: string, value?: any) {
  if (value) {
    set(obj, prop, value)
  }
}

/**
 * 扩展根路由为子路由
 * @param rootConfig 根路由对象
 * @param menu 服务器路由配置
 * @returns 子路由地址
 */
function extendChildRoute(rootConfig: RouteChildrenConfigsTable, menu: ServerMenu): RouteChildrenConfigsTable {
  rootConfig.meta.keepAlive = menu.meta.keepAlive
  return rootConfig
}

/**
 * 将后端路由配置转化为后台路由配置
 * @param menu 服务器路由配置
 * @returns 路由配置
 */
function menuToRouteConfig(menu: ServerMenu, children: boolean = false): RouteConfigsTable {
  const routeConfig: RouteConfigsTable = {
    path: menu.path,
    name: menu.name ?? '未命名菜单',
    meta: {
      title: menu.meta.title,
      icon: menu.meta.icon ?? '',
      showLink: !menu.hidden,
      rank: menu.sort,
    },
  }
  if (menu.children && isArray(menu.children)) {
    routeConfig.children = menu.children.map(item =>
      extendChildRoute(menuToRouteConfig(item, true), item),
    )
  }
  else {
    routeConfig.children = []
  }

  if (children) {
    if (pageList.find(item => item === menu.component)) {
      mountProperty(routeConfig, 'component', pageModule[menu.component])
    }
  }
  else {
    mountProperty(routeConfig, 'component', Layout)
    mountProperty(routeConfig, 'redirect', routeConfig.children.at(0)?.path)
  }
  return routeConfig
}

/**
 * 加载本地路由配置
 * @returns 本地路由配置
 */
async function getLocalRoutes(): Promise<RouteConfigsTable[]> {
  const routes: RouteConfigsTable[] = []
  const localRouteModule = import.meta.glob('/src/router/modules/**/*.ts')
  for (const module in localRouteModule) {
    routes.push((await localRouteModule[module]() as any).default)
  }
  return flatten(routes)
}

/**
 * 加载远程路由配置
 * @returns 远程路由配置
 */
async function getRemoteRoutes(): Promise<RouteConfigsTable[]> {
  return (await client.POST('/menu/getMenu').then(data => data.data.data.menus)).map(item => menuToRouteConfig(item, false))
}

export async function initializeRoute(router: Router) {
  const auth = useAuthStore()
  const localRoutes = await getLocalRoutes()
  const remoteRoutes = await getRemoteRoutes()
  const routes = [...localRoutes, ...remoteRoutes]
  auth.mountRoutes(cloneDeep(routes))
  routes.forEach((item: any) => router.addRoute(item))
}
