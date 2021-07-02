import axios, { get, post,postBody } from "@/util/http/axios";
import baseURL from '@/config/env'

axios.defaults.baseURL = baseURL

export function indexHotMore(params) {
  return get('/blade-course/api/m/course/index-hot-more', params)
}

/**
 * @param params-id: 课程id;
 * @param params-courseType: 课程类型(1视频，2音频，3图文，4套餐，5专栏)
 */
export function courseDetail(params) {
  return get('/blade-course/api/m/course/index-hot-detail', params)
}

/**
 * 课程评价列表
 * @param params
 * @returns {*}
 */
export function getEvaluateCourseList(params) {
  return post('/blade-course/api/m/course/evaluate-course-list', params)
}

/**
 * 用户个人评价列表
 * @param params
 * @returns {*}
 */
export function getEvaluateUserList(params) {
  return post('/blade-course/api/m/course/evaluate-user-list', params)
}

export function getPlayInfo(params) {
  return get('blade-resource/vod/endpoint/getPlayInfo', params)
}

export function evaluateCourse(params) {
  return postBody('/blade-course/api/m/course/evaluate', params)
}

