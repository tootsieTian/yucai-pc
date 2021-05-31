export default [
  {
    path: '/personal/vip',
    component: () => import('@/views/personal/vip/index'),
    meta: {
      showTab: false,
      title: '会员中心'
    }
  },
]
