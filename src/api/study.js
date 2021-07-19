import axios, { get, post } from "../util/http/axios";
import baseURL from '../config/env'
axios.defaults.baseURL = baseURL

//获取我的学习页面课程
export function getMycourselist(params) {
    return get('/blade-course/api/m/course/my-course-list', params)
}
// 查看更多
export function getMycourselistmore(params) {
    return post('/blade-course/api/m/course/my-course-list-more', params)
}
// 删除课程
export function removeMycourse(params) {
    return get('/blade-course/api/m/course/remove-course', params)
}
// 置顶课程
export function topMycourse(params) {
    return get('/blade-course/api/m/course/top-course', params)
}
