export default [
  {
    path: '/betterCourse',
    component: () => import('../../views/index/betterCourse/index'),
    meta: {
      foot: true,
      nav: true,
	  title: '御才文化-精品课程'
    }
  }
]