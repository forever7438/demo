import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
/*有关课程接口  start */
//通过关键字搜索课程
exports.searchLessons = async function (parmes) {
  const url = `${baseUrl}/lesson/searchLessons`
  return axios.post(url, qs.stringify(parmes))
}
//通过标签搜索课程
exports.filterLessons = async function (parmes) {
  const url = `${baseUrl}/lesson/filterLessons`
  return axios.post(url, qs.stringify(parmes))
}

//最新课程
exports.lessonLatest = async function (parmes) {
  const url = `${baseUrl}/lesson/lessonLatest`
  return axios.post(url, qs.stringify(parmes))
}

//最热课程
exports.lessonPopular = async function (parmes) {
  const url = `${baseUrl}/lesson/lessonPopular`
  return axios.post(url, qs.stringify(parmes))
}

//随机推荐课程
exports.randomLessons = async function (parmes) {
  const url = `${baseUrl}/lesson/relatedLessons`
  return axios.post(url, qs.stringify(parmes))
}

//添加课程-v2  --前端上传
exports.addLesson2 = async function (parmes) {
  const url = `${baseUrl}/lesson/addLesson2`
  return axios.post(url, qs.stringify(parmes))
}
//编辑课程名称
exports.lessonNameEdit = async function (parmes) {
  const url = `${baseUrl}/lesson/lessonNameEdit`
  return axios.post(url, qs.stringify(parmes))
}
//编辑课程简介
exports.lessonDescEdit = async function (parmes) {
  const url = `${baseUrl}/lesson/lessonDescEdit`
  return axios.post(url, qs.stringify(parmes))
}
//编辑课程封面
exports.lessonCoverEdit = async function (parmes) {
  const url = `${baseUrl}/lesson/lessonCoverEdit`
  return axios.post(url, qs.stringify(parmes))
}
//编辑课程标签
exports.lessonLabelEdit = async function (parmes) {
  const url = `${baseUrl}/lesson/lessonLabelEdit`
  return axios.post(url, qs.stringify(parmes))
}
//首页精品推荐课程
exports.getRecommendLesson = async function () {
  const url = `${baseUrl}/lesson/recommendLesson`
  return axios.post(url)
}
//用户个人空间课程
exports.lessonOfUser = async function (parmes) {
  const url = `${baseUrl}/lesson/lessonOfUser`
  return axios.post(url, qs.stringify(parmes))
}
//课程详情
exports.lessonDetail = async function (parmes) {
  const url = `${baseUrl}/lesson/lessonDetail`
  return axios.post(url, qs.stringify(parmes))
}

//删除已发布的课程
exports.deleteLesson = async function (parmes) {
  const url = `${baseUrl}/lesson/deleteLesson`
  return axios.post(url, qs.stringify(parmes))
}
/*  end 
 */
