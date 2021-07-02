import axios,{get, post} from "@/util/http/axios";
import baseURL from '@/config/env'
axios.defaults.baseURL = baseURL
// 一级分类请求
export function classifyOne(params) {
  return get('/blade-course/api/m/category/list-one', params)
}
// 二级分类请求
export function classifyTwo(params) {
  return get('/blade-course/api/m/category/list-two', params)
}
