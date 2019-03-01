// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import moment from 'moment'
import router from './router'
import VideoPlayer from 'vue-video-player'
import Vuex from 'vuex'
import Vant from 'vant'
import 'amfe-flexible';
import aws from 'aws-sdk';
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('vant/lib/index.css')
Vue.use(VideoPlayer)
Vue.use(Vant)
Vue.use(Vuex)
Vue.config.productionTip = false
//使用aws s3对象存储服务器sdk
Vue.use(aws)
//日期格式化
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
