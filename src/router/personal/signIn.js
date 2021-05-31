export default [
  {
    path: '/personal/signIn',
    component: () => import('@/views/personal/signIn/index'),
    meta: {
      title: '积分福利'
    }
  },
  {
    path: '/personal/signIn/integral',
    component: () => import('@/views/personal/signIn/integral'),
    meta: {
      title: '我的积分'
    }
  },
]
