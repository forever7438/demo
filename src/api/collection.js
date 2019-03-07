import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
//收藏
exports.collect = async function (parmes) {
  const url = `${baseUrl}/collection/collect`
  return axios.post(url, qs.stringify(parmes))
}

//获取收藏作品列表
exports.getCollectCreationList = async function () {
  const url = `${baseUrl}/collection/getCollectCreationList`
  return axios.post(url)
}

//获取收藏作品列表
exports.getCollectLessonList = async function () {
  const url = `${baseUrl}/collection/getCollectLessonList`
  return axios.post(url)
}
