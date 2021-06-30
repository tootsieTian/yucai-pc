export default [
  {
    path: '/hotCourse',
    component: () => import('../../views/index/hotCourse/index'),
    meta: {
      foot: true,
      nav: true,
	  title: '御才文化-热门课程'
    }
  }
]
