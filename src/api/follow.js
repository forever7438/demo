import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
/*有关粉丝接口  start */
//关注列表
exports.followedByUser = async function (parmes) {
  const url = `${baseUrl}/follow/followedByUser`
  return axios.post(url, qs.stringify(parmes))
}

//粉丝列表
exports.followersOfUser = async function (parmes) {
  const url = `${baseUrl}/follow/followersOfUser`
  return axios.post(url, qs.stringify(parmes))
}

//取消关注
exports.cancelFollow = async function (parmes) {
  const url = `${baseUrl}/follow/cancelFollow`
  return axios.post(url, qs.stringify(parmes))
}

//关注用户
exports.follow = async function (parmes) {
  const url = `${baseUrl}/follow/follow`
  return axios.post(url, qs.stringify(parmes))
}
/*
end
*/
