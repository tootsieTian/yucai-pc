import { createRouter,createWebHistory } from 'vue-router'
import index from './index/index'
// import classify from './classify'
import personal from "./personal";
import study from "./study";
import login from './login'
import empty from "./empty"
import store from "../store/index.js"
import {
		ElMessage
	} from 'element-plus';

const router = createRouter({
	history: createWebHistory(),
	
	routes: [...index, ...personal, ...login, ...study]
})
router.beforeEach((to, from, next) => {
	 if(window.location.href.indexOf('code')>=0){
	    //如果url中包含code,则保存到store中
	    let code = window.location.href.split("?")[1];
	    code = code.substring(5,code.indexOf('&'));
	    store.state.code = code;
	  }
	 
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	/**
	 * 1、鉴权操作
	 */
	if(to.meta.title){
		document.title = to.meta.title;
	}
	if(to.path!=='/'){
		if(localStorage.getItem('access_token')==null||localStorage.getItem('user_id')==null||localStorage.getItem('access_token')==undefined||localStorage.getItem('user_id')==undefined){
			ElMessage.error("请先登录！")
				next({path:'/'})
		}else{
		next();	
		}
	}else{
		next();
	}
	
	
	
	
});
export default router
