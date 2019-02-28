import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
/*有关作品接口  start */
//首页推荐作品视频
exports.recommendVideo = async function (parmes) {
  const url = `${baseUrl}/creation/recommendVideo`
  return axios.post(url, qs.stringify(parmes))
}

//最新作品
exports.creationLatest = async function (parmes) {
  const url = `${baseUrl}/creation/creationLatest`
  return axios.post(url, qs.stringify(parmes))
}

//最火作品
exports.creationPopular = async function (parmes) {
  const url = `${baseUrl}/creation/creationPopular`
  return axios.post(url, qs.stringify(parmes))
}

//随机推荐作品
exports.randomCreations = async function (parmes) {
  const url = `${baseUrl}/creation/relatedCreation`
  return axios.post(url, qs.stringify(parmes))
}
//通过标签搜索作品
exports.filterCreations = async function (parmes) {
  const url = `${baseUrl}/creation/filterCreations`
  return axios.post(url, qs.stringify(parmes))
}

//通过关键字搜索作品
exports.searchCreations = async function (parmes) {
  const url = `${baseUrl}/creation/searchCreations`
  return axios.post(url, qs.stringify(parmes))
}

//上传作品
exports.uploadCreation = async function (parmes, headerConfig) {
  const url = `${baseUrl}/creation/uploadCreation`
  return axios.post(url, parmes, headerConfig)
}

//上传作品--前端上传
exports.uploadCreationJs = async function (parmes) {
  const url = `${baseUrl}/creation/addCreation`
  return axios.post(url, qs.stringify(parmes))
}

//作品详情
exports.creationDetail = async function (parmes) {
  const url = `${baseUrl}/creation/creationDetail`
  return axios.post(url, qs.stringify(parmes))
}

//删除已发布作品
exports.deleteCreation = async function (parmes) {
  const url = `${baseUrl}/creation/deleteCreation`
  return axios.post(url, qs.stringify(parmes))
}

//个人作品列表
exports.personalCreations = async function (parmes) {
  const url = `${baseUrl}/creation/personalCreations`
  return axios.post(url, qs.stringify(parmes))
}

//作品管理页面通过审核的作品
exports.creationApproved = async function (parmes) {
  const url = `${baseUrl}/creation/creationApproved`
  return axios.post(url, qs.stringify(parmes))
}

//作品管理页面正在审核的作品
exports.creationChecking = async function (parmes) {
  const url = `${baseUrl}/creation/creationChecking`
  return axios.post(url, qs.stringify(parmes))
}
//作品管理页面审核未通过的作品
exports.creationUnapproved = async function (parmes) {
  const url = `${baseUrl}/creation/creationUnapproved`
  return axios.post(url, qs.stringify(parmes))
}
//首页精品推荐作品
exports.getRecommendCreation = async function () {
  const url = `${baseUrl}/creation/recommendCreation`
  return axios.post(url)
}

//用户个人空间作品
exports.creationOfUser = async function (parmes) {
  const url = `${baseUrl}/creation/creationOfUser`
  return axios.post(url, qs.stringify(parmes))
}

/*end */
