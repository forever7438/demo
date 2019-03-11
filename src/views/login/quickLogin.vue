<template>
  <div class="login_content">
    <login-header title="快速登录"></login-header>
    <div class="login_bg">
      <img :src="logo_image">
    </div>
    <div class="login_message">
      <h3>益谷创客平台</h3>
      <ul>
        <li>
          <input type="number" placeholder="请输入手机号码" v-model="phoneNum">
        </li>
        <li>
          <input type="number" placeholder="请输入验证码" v-model="verificationCode">
          <button :disabled="isDisabled" @click="sendCode">{{codeMessage}}</button>
        </li>
      </ul>
      <div class="submit_btn">
        <button @click="loginByVerificationCode">{{btnMessage}}</button>
      </div>
      <div class="error_message">
        <p>没有绑定手机号将无法使用快速登录</p>
        <router-link to="/login" class="login_link">使用账号登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import loginHeader from "../../components/header/loginHeader";
import { fetchVerificationCode, loginByVerificationCode } from "@/api/index";
export default {
  name: "quickLogin",
  components: {
    loginHeader
  },
  data() {
    return {
      logo_image: require("../../../static/img/logo.png"),
      btnMessage: "登录",
      phoneNum: null,
      verificationCode: null,
      count: 60,
      timeDown: null,
      isDisabled: false,
      regPhone: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
      codeMessage: "发送验证码"
    };
  },
  methods: {
    //发送验证码
    async sendCode() {
      if (!this.phoneNum) {
        this.$toast.fail({
          mask: true,
          message: "请输入手机号"
        });
        return;
      }
      if (!this.regPhone.test(this.phoneNum)) {
        this.$toast({
          mask: true,
          message: "请输入有效手机号"
        });
        return;
      }
      this.isDisabled = true;
      this.timeDown = setInterval(() => {
        this.count--;
        this.codeMessage = `(${this.count}s)`;
      }, 1000);
      let res = await fetchVerificationCode({
        phoneNum: this.phoneNum
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
    //手机号+验证码登录
    async loginByVerificationCode() {
      if (!this.phoneNum) {
        this.$toast.fail({
          mask: true,
          message: "请输入手机号"
        });
        return;
      }
      if (!this.verificationCode) {
        this.$toast.fail({
          mask: true,
          message: "请输入验证码"
        });
        return;
      }
      this.btnMessage = "登录中...";
      let res = await loginByVerificationCode({
        phoneNum: this.phoneNum,
        code: this.verificationCode
      });
      if (res.data.code === 200) {
        this.btnMessage = "登录";
        //存储token在cookies供全局使用
        Cookies.set("token", res.data.data.token);
        this.$toast.success({
          mask: true,
          message: "登录成功"
        });
        setTimeout(() => {
          let href = this.$router.resolve({
            path: "/production"
          });
          window.open(href.href, "_self");
        }, 3000);
      } else {
        this.btnMessage = "登录";
        //清空输入框
        this.phoneNum = null;
        this.verificationCode = null;
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    }
  },
  watch: {
    count(newd, old) {
      if (newd === 0) {
        clearInterval(this.timeDown);
        this.count = 60;
        this.codeMessage = "发送验证码";
        this.isDisabled = false;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.login_content {
  font-size: 0.5rem;
  font-weight: 600;
  .login_bg {
    position: relative;
    width: 100%;
    height: 10rem;
    background: url("../../../static/img/bj-denglu.png") no-repeat center/cover;
    img {
      width: 2.6rem;
      height: 2.6rem;
      position: absolute;
      top: 5.5rem;
      left: 3.7rem;
    }
  }
  .login_message {
    display: flex;
    flex-direction: column;
    ul {
      li {
        margin: 5%;
        display: flex;
        font-size: 0.4rem;
        input {
          height: 1rem;
          border-radius: 0.1rem;
          border: 1px solid #dddddd;
          padding-left: 1rem;
        }
        &:nth-of-type(1) {
          position: relative;
          input {
            width: 100%;
          }
          &::before {
            display: inline-block;
            content: "";
            width: 0.7rem;
            height: 0.7rem;
            background: url("../../../static/img/icon_shouji.png") no-repeat
              center/100%;
            position: absolute;
            left: 3px;
            top: 5px;
          }
        }
        &:nth-of-type(2) {
          display: flex;
          justify-content: space-between;
          position: relative;
          &::before {
            display: inline-block;
            content: "";
            width: 0.7rem;
            height: 0.7rem;
            background: url("../../../static/img/icon_yanzhengma.png") no-repeat
              center/100%;
            position: absolute;
            left: 3px;
            top: 5px;
          }
          button {
            color: #ffffff;
            border-radius: 4px;
            border: none;
            font-size: 0.4rem;
            background: -webkit-linear-gradient(
              left,
              #3e40e2,
              #4413b8
            ); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(
              right,
              #3e40e2,
              #4413b8
            ); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #3e40e2, #4413b8);
            /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #3e40e2, #4413b8);
            /* 标准的语法 */
          }
        }
      }
    }
    .submit_btn {
      padding: 5% 5% 2%;
      button {
        width: 100%;
        height: 1rem;
        color: #ffffff;
        border-radius: 4px;
        border: none;
        background: -webkit-linear-gradient(
          left,
          #3e40e2,
          #4413b8
        ); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(
          right,
          #3e40e2,
          #4413b8
        ); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #3e40e2, #4413b8);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(
          to right,
          #3e40e2,
          #4413b8
        ); /* 标准的语法 */
      }
    }
    .error_message {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      font-size: 14/37.5rem;
      p {
        &::before {
          content: "*";
          color: red;
          vertical-align: sub;
        }
      }
      .login_link {
        color: #df9b16;
      }
    }
  }
}
</style>
