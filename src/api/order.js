import axios,{get, postBody} from "@/util/http/axios";
import baseURL from '@/config/env'
axios.defaults.baseURL = baseURL
// 获取订单列表
export function getOrderList(params) {
  return postBody('/blade-order/api/m/order/order-list', params)
}

// 下单
export function setOrder(params) {
  return postBody('/blade-order/api/m/order/set-order', params)
}
