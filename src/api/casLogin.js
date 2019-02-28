import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
/*第三方登录接口  start
 */
//验证第三方用户
exports.party = async function (parmes) {
  const url = 'http://113.57.174.58:9007/casclientproxy/proxy/SessionTokenValidateAction.a';
  return axios.post(url, qs.stringify(parmes))
}

//免密登录第一步
exports.secretLogin = async function (parmes) {
  const url = `${baseUrl}/casLogin/secretLogin`;
  return axios.post(url, qs.stringify(parmes))
}

//免密登录第二步
exports.loginCheck = async function (parmes) {
  const url = `${baseUrl}/casLogin/loginCheck`;
  return axios.post(url, qs.stringify(parmes))
}
/* end
 */
