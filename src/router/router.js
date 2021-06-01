import { createRouter,createWebHistory } from 'vue-router'
import index from './index/index'
// import classify from './classify'
import personal from "./personal";
// import study from "./study";
import login from './login'


const router = createRouter({
	history: createWebHistory(),
	routes: [...index, ...personal,...login
		// ...classify, ...study,...login
	]
})
router.beforeEach((to, from, next) => {
`	// document.body.scrollTop = 0;
	// document.documentElement.scrollTop = 0;`
	/**
	 * 1、鉴权操作
	 */
	// if(to.meta.title){
	// 	document.title = to.meta.title;
	// }
	next();
});
export default router
