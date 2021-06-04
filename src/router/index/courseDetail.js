export default [
  {
    path: '/courseDetail',
    component: () => import('../../views/index/courseDetail'),
    meta: {
      foot: true,
      nav: true
    }
  },
  {
    path: '/courseDetail/videoPlay',
    component: () => import('../../views/index/courseDetail/videoPlay'),
    meta: {
      nav: true
    }
  },
  {
    path: '/courseDetail/order',
    component: () => import('../../views/index/courseDetail/order'),
    meta: {
      nav: true,
      foot: true
    }
  }
]
