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
  }
]
