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
	    nav: true
	  }
	},
	{
	  path: '/personal/startEvaluation',
	  component: () => import('../../views/personal/evaluation/startEvaluation'),
	  meta: {
	    foot: true,
	    nav: true
	  }
	},
	{
	  path: '/personal/order',
	  component: () => import('../../views/personal/evaluation/order'),
	  meta: {
	    foot: true,
	    nav: true
	  }
	},
	{
	  path: '/personal/result',
	  component: () => import('../../views/personal/evaluation/result'),
	  meta: {
	    foot: true,
	    nav: true
	  }
	},
]

export default {
	inside,outside
}
