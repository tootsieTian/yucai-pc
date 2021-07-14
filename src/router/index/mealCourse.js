export default [
  {
    path: '/mealCourse',
    component: () => import('../../views/index/mealCourse/index'),
    meta: {
      foot: true,
      nav: true,
	  title: '御才文化-套餐课程'
    }
  }
]