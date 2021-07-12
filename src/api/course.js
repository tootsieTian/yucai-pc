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

// 评价课程
export function evaluateCourse(params) {
  return postBody('/blade-course/api/m/course/evaluate', params)
}

// 查看收藏课程列表
export function getCollectlist(params) {
  return post('/blade-course/api/m/course/collect-course-list', params)
}

// 取消我的收藏课程
export function cancelCellect(params) {
  return get('/blade-course/api/m/course/cancel-collect-course', params)
}

// 收藏课程
export function collectCourse(params) {
  return get('/blade-course/api/m/course/collect-course', params)
}

// 猜你喜欢列表
export function myLovelist(params) {
  return get('/blade-course/api/m/course/love-list', params)
}

// 浏览记录列表
export function getBrowseRecordList(params) {
  return post('/blade-course/api/m/course/browse-record-list', params)
}

// 添加浏览记录
export function addBrowseRecord(params) {
  return get('/blade-course/api/m/course/browse-record', params)
}

// 删除浏览记录
export function removeBrowseRecord(params) {
 return get('/blade-course/api/m/course/remove-browse-record', params)
}

// 观看时长上传
export function postViewTime(params) {
  return postBody('/blade-course/api/m/course/course-view-time', params)
}

