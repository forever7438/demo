const data = {
  state: {
    text: null, //评论内容
    phoneNum: null, //手机号
    verificationCode: null, //验证码
  },

  mutations: {
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
    }
  }

}

export default data
