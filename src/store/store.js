import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/setData'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    data
  },
})

export default store
