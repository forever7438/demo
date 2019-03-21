import {
  stat
} from "fs";

const data = {
  state: {
    isChange: false, //用于监听comment列表是否改变
    text: null, //评论内容
    phoneNum: null, //手机号
    verificationCode: null, //验证码
    signatrueText: null, //个性签名
    str: null, //关键字搜索
  },

  mutations: {
    SET_STR: (state, str) => {
      state.str = str
    },
    SET_STATE: (state, isChange) => {
      state.isChange = true
    },
    CLEAR_STATE: (state, isChange) => {
      state.isChange = false
    },
    SET_TEXT: (state, text) => {
      state.text = text
    },
    CLEAR_TEXT: (state, text) => {
      state.text = null
    },
    SET_PHONE_NUM: (state, phoneNum) => {
      state.phoneNum = phoneNum
    },
    CLEAR_PHONE_NUM: (state, phoneNum) => {
      state.phoneNum = null
    },
    SET_CODE: (state, verificationCode) => {
      state.verificationCode = verificationCode
    },
    CLEAR_CODE: (state, verificationCode) => {
      state.verificationCode = null
    },
    SET_SIGN_TEXT: (state, signatrueText) => {
      state.signatrueText = signatrueText
    },
    CLEAR_SIGN_TEXT: (state, signatrueText) => {
      state.signatrueText = null
    },
  }

}

export default data
