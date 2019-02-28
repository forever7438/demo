import axios from 'axios';
import qs from 'qs';
import {
  baseUrl
} from '../config/url';
/*有关消息接口  start */
//获取消息列表
exports.messageList = async function () {
  const url = `${baseUrl}/message/messageList`
  return axios.post(url)
}

//未读消息数量
exports.messageUnreadCount = async function () {
  const url = `${baseUrl}/message/messageUnreadCount`
  return axios.post(url)
}

//将全部消息设置为已读
exports.setMessageAllReaded = async function () {
  const url = `${baseUrl}/message/setMessageAllReaded`
  return axios.post(url)
}

//将单条消息设置为已读
exports.setMessageReaded = async function (parmes) {
  const url = `${baseUrl}/message/setMessageReaded`
  return axios.post(url, qs.stringify(parmes))
}

//删除单条消息
exports.deleteMessage = async function (parmes) {
  const url = `${baseUrl}/message/deleteMessage`
  return axios.post(url, qs.stringify(parmes))
}

//删除全部消息
exports.deleteAllMessage = async function () {
  const url = `${baseUrl}/message/deleteAllMessage`
  return axios.post(url)
}
/*
end
*/
