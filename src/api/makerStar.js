import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
//创客小明星
exports.makerStar = async function (parmes) {
  const url = `${baseUrl}/makerStar/makerStar`
  return axios.post(url, qs.stringify(parmes))
}

//首页轮播图
exports.getBanners = async function (parmes) {
  const url = `${baseUrl}/adInfo/getBanners`
  return axios.get(url, {
    params: parmes
  })
}

//请求对象存储配置文件
exports.getS3Properties = async function () {
  const url = `${baseUrl}/oss/getS3Properties`
  return axios.get(url)
}
