const data = {
  state: {
    text: null //评论内容
  },

  mutations: {
    SET_TEXT: (state, text) => {
      state.text = text
    },
    CLEAR_TEXT: (state, text) => {
      state.text = null
    }
  }

}

export default data
