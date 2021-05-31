import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const classify = [{
  path: '/classify',
  component: () => import('../views/classify'),
  meta: {
      showTab: true,
      keepAlive: true,
      title: '分类'
    }
  },
  {
    path: '/classify/detail',
    component: () => import('../views/classify/detail'),
    meta: {
      showTab: false,
      keepAlive: false,

    }
  }
]
export default classify
