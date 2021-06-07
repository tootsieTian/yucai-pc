export default [
  {
    path:'profit',
    component: () => import('@/views/personal/profit/index'),
    meta: {
      title: '我的收益'
    }
  },
  {
    path:'profitRecord',
    component: () => import('@/views/personal/profit/profitRecord'),
    meta: {
      title: '收益记录'
    }
  },
]
