<template>
  <div>
    <div class="code_content">
      <span class="code">验证码:</span>
      <input type="number" v-model="verificationCode" @change="saveCode">
      <button class="send_code" :disabled="isDisabled" @click="sendCode(phone)">{{btnMessage}}</button>
    </div>
    <!-- <div class="error_message">验证码输入错误,请查证后输入</div> -->
  </div>
</template>

<script>
import { fetchVerificationCode } from "@/api/index";
export default {
  name: "dialogCode",
  props: {
    phone: String
  },
  data() {
    return {
      verificationCode: null,
      btnMessage: "发送",
      count: 60,
      regPhone: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
      timeDown: null,
      isDisabled: false
    };
  },
  methods: {
    //发送验证码
    async sendCode(phone) {
      let phoneNum = phone || this.$store.state.data.phoneNum;
      if (!phoneNum) {
        this.$toast.fail({
          mask: true,
          message: "请输入手机号"
        });
        return;
      }
      if (!this.regPhone.test(phone || this.$store.state.data.phoneNum)) {
        this.$toast({
          mask: true,
          message: "请输入有效手机号"
        });
        return;
      }
      this.isDisabled = true;
      this.timeDown = setInterval(() => {
        this.count--;
        this.btnMessage = `(${this.count}s)`;
      }, 1000);
      let res = await fetchVerificationCode({
        phoneNum: phoneNum
      });
      if (res.data.code === 200) {
        this.$toast.success({
          mask: true,
          message: "验证码已发送"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },
    //存储验证码在vuex里
    saveCode() {
      this.$store.commit("SET_CODE", this.verificationCode);
    }
  },
  watch: {
    count(newd, old) {
      if (newd === 0) {
        clearInterval(this.timeDown);
        this.count = 60;
        this.btnMessage = "发送";
        this.isDisabled = false;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.code_content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.45rem;
  margin: 0.3rem auto 0.3rem;
  .code {
    flex: 3;
  }
  input {
    width: 4rem;
    margin-left: -0.7rem;
    padding: 0.1rem;
  }
  .send_code {
    border: none;
    line-height: 0.9rem;
    flex: 2;
    margin-left: 0.2rem;
    background: #3688ff;
    border-radius: 0.1rem;
    color: #ffffff;
  }
}
.error_message {
  font-size: 0.4rem;
  margin-bottom: 0.3rem;
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