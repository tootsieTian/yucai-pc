export default [
  {
    path: '/login',
	redirect:'/',
    component: () => import('../../views/login'),
	
	meta: {
	  title: '御才文化-登录'
	}
  }
]
