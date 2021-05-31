import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import './styles/common/common.scss'
import './styles/common/commonHm.scss'
import 'lib-flexible/flexible.js'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
