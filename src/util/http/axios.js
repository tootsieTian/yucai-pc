import axios from 'axios'
import router from "../../router/router";
import { serialize } from '../util';
import website from '../../config/website';
import qs from 'qs'

//默认超时时间
axios.defaults.timeout = 100000
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true
axios.defaults.headers['Authorization'] = 'Basic c2FiZXI6c2FiZXJfc2VjcmV0'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers['Blade-Auth'] = 'bearer ' + localStorage.getItem('access_token')
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
    //如果在白名单里则自行catch逻辑处理
    if (statusWhiteList.includes(status)) return Promise.reject(res);
    return res.data;
  },
  (error) => {
    const status = error.response.status;
    console.error(error)
    const message = error.response.data.msg || '未知错误';
    //如果是401则跳转到登录页面
    if (status === 401) {
      router.push('/login')
    }
    return Promise.reject(new Error(error));
  });

// 封装get请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    url = `${url}?`
    for (const key in params) {
      url = `${url}&${key}=${params[key]}`
    }
    axios.get(url)
      .then(res => {
        resolve(res.data)
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

// 封装post以body格式发送请求请求
export function postBody(url, params) {
  axios.defaults.headers['Content-Type'] = 'application/json'
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(res => {
        reject(res)
      })
  })
}

// 封装上传文件请求
export function uploadFile(url, params) {
  axios.defaults.headers['Content-Type'] = 'multipart/form-data'
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(res => {
        reject(res)
      })
  })
}


export default axios;
