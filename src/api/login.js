import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';

/*有关用户操作接口 start
 */
//登录
exports.loginIn = async function (parmes) {
  const url = `${baseUrl}/login/login`;
  return axios.post(url, qs.stringify(parmes))
}
//注销
exports.loginOut = async function () {
  const url = `${baseUrl}/login/logout`
  return axios.get(url)
}

//修改密码
exports.updatePassword = async function (parmes) {
  const url = `${baseUrl}/login/updatePassword`
  return axios.post(url, qs.stringify(parmes))
}

//获取验证码
exports.fetchVerificationCode = async function (parmes) {
  const url = `${baseUrl}/login/fetchVerificationCode`
  return axios.post(url, qs.stringify(parmes))
}

//绑定手机号
exports.bindPhone = async function (parmes) {
  const url = `${baseUrl}/login/bindPhone`
  return axios.post(url, qs.stringify(parmes))
}

//解绑手机号
exports.unbindPhone = async function (parmes) {
  const url = `${baseUrl}/login/unbindPhone`
  return axios.post(url, qs.stringify(parmes))
}

//找回密码
exports.retrievePassword = async function (parmes) {
  const url = `${baseUrl}/login/retrievePassword`
  return axios.post(url, qs.stringify(parmes))
}
/* end
 */
