const inside = [
 {
   path: 'evaluation',
   component: () => import('../../views/personal/evaluation')
 },
 {
   path: 'achievement',
   component: () => import('../../views/personal/evaluation/achievement')
 },
 {
   path: 'Myevaluation',
   component: () => import('../../views/personal/evaluation/evaluation')
 },
 {
   path: 'wrong',
   component: () => import('../../views/personal/evaluation/wrong')
 },
 {
   path: 'analysis',
   component: () => import('../../views/personal/evaluation/analysis')
 },

]

const outside =[
	{
	  path: '/personal/buyEvaluation',
	  component: () => import('../../views/personal/evaluation/buyEvaluation'),
	  meta: {
	    foot: true,
	    nav: true,
		title:"御才文化-个人中心-购买测评"
	  }
	},
	{
	  path: '/personal/startEvaluation',
	  component: () => import('../../views/personal/evaluation/startEvaluation'),
	  meta: {
	    foot: true,
	    nav: true,
		title:"御才文化-个人中心-开始测评"
	  }
	},
	{
	  path: '/personal/order',
	  component: () => import('../../views/personal/evaluation/order'),
	  meta: {
	    foot: true,
	    nav: true,
		title:"御才文化-个人中心-我的订单"
	  }
	},
	{
	  path: '/personal/result',
	  component: () => import('../../views/personal/evaluation/result'),
	  meta: {
	    foot: true,
	    nav: true,
		title:"御才文化-个人中心-订单处理"
	  }
	},
]

export default {
	inside,outside
}
