import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
/* 用户个人空间接口 start
 */
//修改用户名
exports.setUsername = async function (parmes) {
  const url = `${baseUrl}/personalSpace/setUsername`
  return axios.post(url, qs.stringify(parmes))
}
//获取用户空间信息
exports.fetchUserInfo = async function (parmes) {
  const url = `${baseUrl}/personalSpace/fetchUserInfo`
  return axios.get(url, {
    params: parmes
  })
}

//获取用户发布内容
exports.fetchUserContent = async function (parmes) {
  const url = `${baseUrl}/personalSpace/fetchUserContent`
  return axios.post(url, qs.stringify(parmes))
}

//更改头像
exports.changeAvatar = async function (parmes) {
  const url = `${baseUrl}/personalSpace/changeAvatar2`
  return axios.post(url, qs.stringify(parmes))
}

//更改个性签名
exports.changeSignature = async function (parmes) {
  const url = `${baseUrl}/personalSpace/changeSignature`
  return axios.post(url, qs.stringify(parmes))
}

/* end
 */
