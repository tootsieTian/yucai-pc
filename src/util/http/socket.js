import VueSocketIO from 'vue-socket.io'
import axios from './axios'
import Vue from 'vue'
var wesocket = {
  debug: true,
  connection: "",
  vuex: {}
}
Vue.use(new VueSocketIO(wesocket))


export default wesocket
