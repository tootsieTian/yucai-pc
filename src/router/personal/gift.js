export default [
  {
    path: '/personal/gift',
    component: () => import('@/views/personal/gift/index'),
    meta: {
      title: '领赠记录'
    }
  },
  {
    path: '/personal/gift/coupon',
    component: () => import('@/views/personal/gift/coupon'),
    meta: {
      title: '送给我的优惠券'
    }
  },
]
