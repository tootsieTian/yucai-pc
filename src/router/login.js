import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const login = [
  {
    path: '/login/checkStudy',
    component: () => import('../views/checkStudy/index'),
    meta: {
      keepAlive: false,
      showTab: false,
      title: '选择学习领域'
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/index'),
    meta: {
      keepAlive: false,
      showTab: false,
      title: '登录'
    },
  }
]
export default login
