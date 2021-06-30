import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import './styles/common/common.scss'
import 'amfe-flexible/index'

const app = createApp(App)
app.directive('v-web-title', {
  inserted: function (el, binding) {
    const { value } = binding
    if (el.dataset.title) { // 方式1，可以给标签的data-title的属性赋值
      document.title = el.dataset.title
    } else if (value && value.title) { // 方式2，指令传参
      document.title = value.title
    }
  },
  update (el, binding, vnode, oldVnode) {
    const { value } = binding
    if (el.dataset.title) {
      document.title = el.dataset.title
    } else if (value && value.title) {
      document.title = value.title
    }
  }
})

app.use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
