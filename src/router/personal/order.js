export default [
  {
    path: '/personal/order',
    component: () => import('@/views/personal/order/index'),
    meta: {
      title: '我的订单'
    }
  },
  {

    path: '/personal/order/detail',
    component: () => import('@/views/personal/order/orderDetail'),
    meta: {
      title: '订单详情'
    }
  },
]
