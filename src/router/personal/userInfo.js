export default [
  {
    path: '/personal',
	redirect: '/personal/userInfo',
    component: () => import('../../views/personal'),
	children: [
	        {
	          path: 'edit',
	          component: () => import('../../views/personal/userInfo/edit')
	        },
			{
			  path: 'userInfo',
			  component: () => import('../../views/personal/userInfo')
			}
	      ],
    meta: {
      title: '个人资料'
    }
  },
]
