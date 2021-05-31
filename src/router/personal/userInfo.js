export default [
  {
    path: '/personal/userInfo',
    component: () => import('../../views/personal/userInfo'),
    meta: {
      title: '个人资料'
    }
  },
  {
    path: '/personal/userInfo/edit',
    component: () => import('../../views/personal/userInfo/edit'),
    meta: {
      title: '编辑个人资料'
    }
  },
]
