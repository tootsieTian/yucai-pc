import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementPlus from 'element-plus'
import 'normalize.css/normalize.css'
import './styles/common/common.scss'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
