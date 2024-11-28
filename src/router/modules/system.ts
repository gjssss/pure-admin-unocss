const { VITE_HIDE_HOME } = import.meta.env
const Layout = () => import('@/layout/index.vue')

export default {
  path: '/system',
  name: 'System',
  component: Layout,
  redirect: '/system/menu',
  meta: {
    icon: 'ep:home-filled',
    title: '系统设置',
    rank: 7,
  },
  children: [
    {
      path: '/system/menu',
      name: 'Menu',
      component: () => import('@/views/system/menu.vue'),
      meta: {
        title: '菜单设置',
        showLink: VITE_HIDE_HOME !== 'true',
      },
    },
  ],
} satisfies RouteConfigsTable
