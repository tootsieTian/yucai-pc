export default [
  {
    path: '/courseDetail',
    component: () => import('../../views/index/courseDetail'),
    meta: {
      foot: true,
      nav: true,
	  title: '御才文化-课程详情'
    }
  },
  {
    path: '/courseDetail/videoPlay',
    component: () => import('../../views/index/courseDetail/videoPlay'),
    meta: {
      nav: true,
	   title: '御才文化-课程播放'
    }
  },
  {
    path: '/courseDetail/order',
    component: () => import('../../views/index/courseDetail/order'),
    meta: {
      nav: true,
      foot: true,
	   title: '御才文化-课程订单'
    }
  }
]
