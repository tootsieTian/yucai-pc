import axios,{get, post,postBody} from "../util/http/axios";
import baseURL from '../config/env'
axios.defaults.baseURL = baseURL

export function getUserInfo(params){
  return get('/blade-wechat/api/wechat/wxMobileUserApi/getMobileUserInfoById', params)
}

export function setUserInfo(params) {
  return postBody('/blade-wechat/api/wechat/wxMobileUserApi/updateMobileUserInfo', params)
}
