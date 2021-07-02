import axios,{get, post} from "@/util/http/axios";
import baseURL from '@/config/env'
axios.defaults.baseURL = baseURL

export function getCategoryListOne(params) {
  return get('/blade-course/api/m/category/list-one', params)
}

export function getCategoryListTwo(params) {
  return get('/blade-course/api/m/category/list-two', params)
}
