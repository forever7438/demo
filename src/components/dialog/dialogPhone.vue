<template>
  <div>
    <div class="phone_content">
      <span>手机号码:</span>
      <input type="number" v-model="phoneNum" @change="savePhone">
    </div>
    <!-- <div class="error_message">验证码输入错误,请查证后输入</div> -->
  </div>
</template>

<script>
export default {
  name: "dialogPhone",
  data() {
    return {
      phoneNum: null
    };
  },
  methods: {
    //获取用户输入手机号,存储在vuex里
    savePhone() {
      this.$store.commit("SET_PHONE_NUM", this.phoneNum);
    }
  }
};
</script>

<style lang='less' scoped>
.phone_content {
  display: flex;
  align-items: center;
  font-size: 0.45rem;
  span {
    flex: 2;
    text-align: right;
  }
  input {
    // flex: 7;
    width: 6.5rem;
    padding: 0.1rem;
  }
}
.error_message {
  font-size: 0.4rem;
  &::before {
    margin-right: 0.1rem;
    display: inline-block;
    content: "*";
    color: red;
    font-size: 0.5rem;
    vertical-align: text-top;
  }
}
</style>