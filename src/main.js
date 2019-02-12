// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'
import Vuex from 'vuex'
import Vant from 'vant'
import 'amfe-flexible';
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('vant/lib/index.css')
Vue.use(VideoPlayer)
Vue.use(Vant)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
