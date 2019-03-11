import axios from 'axios';
import qs from 'qs';
import Cookies from "js-cookie";
import merge from "webpack-merge";
import casLogin from "./casLogin";
import comment from "./comment";
import creation from "./creation";
import follow from "./follow";
import label from "./label";
import lesson from "./lesson";
import lessonSection from "./lessonSection";
import login from "./login";
import makerStar from "./makerStar";
import message from "./message";
import personalSpace from "./personalSpace";
import userInfo from "./userInfo";
import collection from "./collection";
import {
  baseUrl
} from '../config/url';
import {
  Toast
} from 'vant';
let loading //定义loading变量
function startLoading() { //使用vant loading start 方法
  loading = Toast.loading({
    duration: 0,
    mask: true,
    message: '加载中...'
  });

}

function endLoading() { //使用vant loading clear 方法
  Toast.clear()
}
let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
//全局设置token
axios.interceptors.request.use(
  config => {
    let token = Cookies.get("token");
    if (token && !(window.location.pathname.split('/').indexOf('login') > 0 || window.location.pathname.split('/').indexOf('quickLogin') > 0)) { // 判断是否存在token，如果存在的话，则每个http header都加上token(如果使用第三方接口,则不需要添加token)
      config.headers.token = `${token}`;
    }
    showFullScreenLoading()
    return config;
  },
  err => {
    return Promise.reject(err);
  })


//http response 拦截器
axios.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)
module.exports = merge(
  casLogin,
  comment,
  creation,
  follow,
  label,
  lesson,
  lessonSection,
  login,
  makerStar,
  message,
  personalSpace,
  userInfo,
  collection
);
