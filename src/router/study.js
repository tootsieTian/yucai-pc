import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const study = [
  {
    path: '/study',
    component: () => import('../views/study'),
    meta: {
      keepAlive: true,
      showTab: true,
      title: '学习'
    }
  },
  {
    path: '/testApi',
    component: () => import('../views/testApi')
  }
]
export default study
