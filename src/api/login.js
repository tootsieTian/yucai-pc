import axios,{get, post} from "@/util/http/axios";
import baseURL from '@/config/env'
axios.defaults.baseURL = baseURL

export function postToken(params) {
  return post('/blade-auth/oauth/token', params)
}

// 手机发送验证码
export function sendMobileCaptcha(params) {
  return get('/blade-auth/api/auth/loginApiController/sendMobileCaptcha', params)
}
