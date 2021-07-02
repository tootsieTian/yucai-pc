import axios,{get, post} from "@/util/http/axios";
import baseURL from '@/config/env'
axios.defaults.baseURL = baseURL
// 获取首页热门
export function getIndexHot(params) {
  return get('/blade-course/api/m/course/index-hot', params)
}
// 获取标签列表
export function getIndexTabList(params) {
  return get('/blade-course/api/m/course/index-tab-list', params)
}

