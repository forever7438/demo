import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
/*有关章节接口 start */
//添加章节
exports.addSection = async function (parmes, headerConfig) {
  const url = `${baseUrl}/lessonSection/addSection`
  return axios.post(url, parmes, headerConfig)
}

//添加章节-v2--前端上传
exports.addSectionByJs = async function (parmes) {
  const url = `${baseUrl}/lessonSection/addSection2`
  return axios.post(url, qs.stringify(parmes))
}
//编辑章节名称
exports.nNameEdit = function sectio(parmes) {
  const url = `${baseUrl}/lessonSection/sectionNameEdit`
  return axios.post(url, qs.stringify(parmes))
}
//编辑章节简介
exports.nDescEdit = function sectio(parmes) {
  const url = `${baseUrl}/lessonSection/sectionDescEdit`
  return axios.post(url, qs.stringify(parmes))
}
//编辑章节视频
exports.nVideoEdit = function sectio(parmes) {
  const url = `${baseUrl}/lessonSection/sectionVideoEdit`
  return axios.post(url, qs.stringify(parmes))
}
//编辑章节索引   
exports.nIndexEdit = function sectio(parmes) {
  const url = `${baseUrl}/lessonSection/sectionIndexEdit`
  return axios.post(url, qs.stringify(parmes))
}
//编辑章节课件    
exports.nCoursewareResourceEdit = function sectio(parmes) {
  const url = `${baseUrl}/lessonSection/sectionCoursewareResourceEdit`
  return axios.post(url, qs.stringify(parmes))
}


//章节详情
exports.sectionDetail = async function (parmes) {
  const url = `${baseUrl}/lessonSection/sectionDetail`
  return axios.post(url, qs.stringify(parmes))
}

//编辑课程内章节
exports.editSection = async function (parmes, headerConfig) {
  const url = `${baseUrl}/lessonSection/editSection`
  return axios.post(url, parmes, headerConfig)
}

//删除已发布的课程内的章节
exports.deleteSection = async function (parmes) {
  const url = `${baseUrl}/lessonSection/deleteSection`
  return axios.post(url, qs.stringify(parmes))
}

/*
end
*/
