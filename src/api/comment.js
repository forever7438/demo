import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
//获取评论
exports.commentsList = async function (parmes) {
  const url = `${baseUrl}/comment/commentsList`
  return axios.post(url, qs.stringify(parmes))
}

//评论
exports.comment = async function (parmes) {
  const url = `${baseUrl}/comment/comment`
  return axios.post(url, qs.stringify(parmes))
}

//回复
exports.reply = async function (parmes) {
  const url = `${baseUrl}/commentReply/reply`
  return axios.post(url, qs.stringify(parmes))
}


//点赞
exports.like = async function (parmes) {
  const url = `${baseUrl}/recordLike/like`
  return axios.post(url, qs.stringify(parmes))
}

//举报
exports.report = async function (parmes) {
  const url = `${baseUrl}/report/report`
  return axios.post(url, qs.stringify(parmes))
}
