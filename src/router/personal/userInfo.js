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
			},
			{
			  path: 'message',
			  component: () => import('../../views/personal/message')
			},
			{
			  path: 'evaluation',
			  component: () => import('../../views/personal/evaluation')
			},
			{
			  path: 'giftHistory',
			  component: () => import('../../views/personal/giftHistory')
			},
			{
			  path: 'browseHistory',
			  component: () => import('../../views/personal/browseHistory')
			},
			{
			  path: 'integral',
			  component: () => import('../../views/personal/integral')
			},
			{
			  path: 'apply',
			  component: () => import('../../views/personal/apply')
			},
			{
			  path: 'myComment',
			  component: () => import('../../views/personal/myComment')
			}
	      ],
    meta: {
      title: '个人资料'
    }
  },
]
