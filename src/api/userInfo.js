import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
//检查手机号是否和已有账号绑定
exports.checkPhoneNum = async function (parmes) {
  const url = `${baseUrl}/userInfo/checkPhoneNum`
  return axios.post(url, qs.stringify(parmes))
}

//获取通用用户信息
exports.commonUserInfo = async function () {
  const url = `${baseUrl}/userInfo/commonUserInfo`
  return axios.post(url)
}