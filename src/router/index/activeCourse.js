export default [
  {
    path: '/activeCourse',
    component: () => import('../../views/index/activeCourse/index'),
    meta: {
      foot: true,
      nav: true,
	   title: '御才文化-活动课程'
    }
  }
]
