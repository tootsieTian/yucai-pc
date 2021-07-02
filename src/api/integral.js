import axios, { get, post, postBody } from "@/util/http/axios";
import baseURL from '@/config/env'

axios.defaults.baseURL = baseURL

/**
 * 获取用户当前积分
 * @param params-userId：用户id
 */
export function getUserIntegral(params) {
  return get('/blade-wechat/api/wechat/pointsRecordApi/getUserPointsCurrent', params)
}

/**
 * 获取用户积分变更记录
 */
export function getUserIntegralRecord(params) {
  return postBody('/blade-wechat/api/wechat/pointsRecordApi/listPointsRecord', params)
}

/**
 * 新增用户积分变更记录
 */
export function addUserIntegralRecord(params) {
  return postBody('/blade-wechat/api/wechat/pointsRecordApi/addPointsRecord', params)
}

/**
 * 获取用户签到积分信息
 */
export function getUserSignPointsInfo(params) {
  return get('/blade-wechat/api/wechat/pointsRecordApi/getUserSignPointsInfo', params)
}

/**
 * 用户签到
 */
export function addSignRecord(params) {
  return postBody('/blade-wechat/api/wechat/pointsRecordApi/addSignRecord', params)
}
