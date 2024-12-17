import { isArray } from '@pureadmin/utils'

interface Sortable {
  rank?: number
}

interface Visable {
  showLink?: boolean
}
function sortRoute<R extends Sortable, T extends { meta?: R, children?: T[] }>(list: T[]) {
  list.sort((a, b) => a.meta.rank - b.meta.rank)
  list.forEach((item) => {
    if (item.children && isArray(item.children)) {
      sortRoute(item.children)
    }
  })
}

function hideRoute<R extends Visable, T extends { meta?: R, children?: T[] }>(list: T[]) {
  list = list.filter(item => item.meta.showLink)
  list.forEach((item) => {
    if (item.children && isArray(item.children)) {
      item.children = hideRoute(item.children)
    }
  })
  return list
}

export const useAuthStore = defineStore('auth', () => {
  const menuList = ref([])

  function mountRoutes(routes: RouteConfigsTable[]) {
    routes = hideRoute(routes)
    sortRoute(routes)
    menuList.value = routes
  }

  return {
    menuList,

    mountRoutes,
  }
})
