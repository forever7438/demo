import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
//获取所有分类
exports.getCategorys = async function () {
  const url = `${baseUrl}/label/category`
  return axios.get(url)
}

//获取所有标签
exports.getAllLabels = async function () {
  const url = `${baseUrl}/label/labels`
  return axios.get(url)
}

//获取所有标签
exports.getLabels = async function (id) {
  const url = `${baseUrl}/label/labels?categoryId=${id}`
  return axios.get(url)
}

//作品标签
exports.labels = async function () {
  const url = `${baseUrl}/label/labels`
  return axios.get(url)
}
