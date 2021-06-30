export default [
  {
    path: '/study',
    component: () => import('../../views/study'),
    meta: {
      foot: true,
      nav: true,
	  title:"御才文化-学习中心"
    }
  }
]
