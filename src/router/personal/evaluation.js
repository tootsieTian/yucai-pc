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
	  path: '/personal/buyevaluation',
	  component: () => import('../../views/personal/evaluation/buyEvaluation'),
	  meta: {
	    foot: true,
	    nav: true
	  }
	},
]

export default {
	inside,outside
}
