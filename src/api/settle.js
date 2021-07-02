import axios,{get, post,postBody} from "@/util/http/axios";
import baseURL from '@/config/env'
axios.defaults.baseURL = baseURL
// axios.defaults.headers['Content-Type'] = 'application/json'

// 讲师入驻
export function teacherSettle(params) {
  return postBody('/blade-settled/api/m/settled/lecturer', params)
}

// 机构入驻
export function companySettle(params) {
  return postBody('/blade-settled/api/m/settled/institution', params)
}
