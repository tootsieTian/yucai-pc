import Vue from 'vue';
import axios from 'axios'
import {serialize} from '../util';
import {getToken} from '../auth';
import website from '../../config/website';
import {Toast} from 'vant';
import qs from 'qs'

Vue.use(Toast);
//默认超时时间
axios.defaults.timeout = 10000
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// 移除重复请求
const pending = []
const removePending = (config) => {
  for (const key in pending) {
    const item = +key
    const list = pending[key]
    if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
      // 执行取消操作
      list.cancel('操作太频繁，请稍后再试');
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
}

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    removePending(config);
    const loadingInstance = ''  // 请求遮罩层
    const meta = (config.meta || {});
    const isToken = meta.isToken === false;
    // 让每个请求携带token
    if (getToken() && !isToken) {
      config.headers[website.tokenHeader] = getToken()
    }
    if (config.method === 'post' && meta.isSerialize === true) {
      config.data = serialize(config.data);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  });

// 响应拦截
axios.interceptors.response.use(res => {
  //获取状态码
  const status = res.data.code || res.status;
  const statusWhiteList = website.statusWhiteList || [];
  const message = res.data.msg || res.data.error_description || '未知错误';
  Toast(message);
  //如果在白名单里则自行catch逻辑处理
  if (statusWhiteList.includes(status)) return Promise.reject(res);
  //如果是401则跳转到登录页面
  if (status === 401) store.dispatch('FedLogOut').then(() => router.push({path: '/login'}));
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {

    return Promise.reject(new Error(message))
  }
  return res;
}, error => {
  return Promise.reject(new Error(error));
});

// 封装get请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(res => {
        reject(res)
      })
  })
}

// 封装post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res)
      })
      .catch(res => {
        reject(res)
      })
  })
}

export default axios;
