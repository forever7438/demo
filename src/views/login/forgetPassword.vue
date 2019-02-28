<template>
  <div class="login_content">
    <login-header title="忘记密码"></login-header>
    <div class="login_bg">
      <img :src="logo_image">
    </div>
    <div class="login_message">
      <h3>益谷创客平台</h3>
      <ul>
        <li>
          <input type="number" placeholder="请输入手机号码" v-model="phoneNum" @blur="isHavePhoneNum">
        </li>
        <li>
          <input
            type="number"
            placeholder="请输入验证码"
            v-model="verificationCode"
            @blur="saveVerificationCode"
          >
          <button @click="sendCode">{{msg}}</button>
        </li>
      </ul>
      <div class="submit_btn">
        <button @click="nextStep">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import loginHeader from "../../components/header/loginHeader";
import { fetchVerificationCode } from "@/api/index";
export default {
  name: "forgetPassword",
  components: {
    loginHeader
  },
  data() {
    return {
      logo_image: require("../../../static/img/logo.png"),
      phoneNum: null,
      verificationCode: null,
      msg: "发送验证码"
    };
  },
  methods: {
    //手机号验证
    isHavePhoneNum() {
      if (this.phoneNum) {
        const regPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if (!regPhone.test(this.phoneNum)) {
          this.phoneNum = null;
          this.$toast.fail({
            mask: true,
            message: "格式不正确"
          });
          this.$store.commit("CLEAR_PHONE_NUM");
        } else {
          this.$store.commit("SET_PHONE_NUM", this.phoneNum);
        }
      } else {
        this.$toast.fail({
          mask: true,
          message: "请输入手机号"
        });
        this.$store.commit("CLEAR_PHONE_NUM");
      }
    },
    //发送验证码
    async sendCode() {
      if (!this.phoneNum) {
        this.$toast({
          mask: true,
          message: "手机号不得为空"
        });
        return;
      }
      let res = await fetchVerificationCode({
        phoneNum: this.phoneNum
      });
      if (res.data.code === 200) {
        this.$toast.success({
          mask: true,
          message: "发送成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },
    //存储验证码
    saveVerificationCode() {
      this.$store.commit("SET_CODE", this.verificationCode);
    },
    //下一步
    nextStep() {
      if (
        !this.$store.state.data.phoneNum ||
        !this.$store.state.data.verificationCode
      ) {
        this.$toast({
          mask: true,
          message: "请输入手机号或验证码"
        });
        return;
      }
      this.$router.push("/updatePassword");
    }
  }
};
</script>
<style lang='less' scoped>
.login_content {
  .header_shade {
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 9999999;
    padding-top: 0.2rem;
    align-items: center;
    .header_back {
      position: absolute;
      padding: 10px;
      svg {
        font-size: 0.6rem;
        color: #ffffff;
      }
    }
    .header_title {
      flex: 9;
      height: 1rem;
      color: #ffffff;
      font-size: 0.6rem;
      font-weight: 600;
    }
  }
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
    font-size: 0.4rem;
    font-weight: 600;
    ul {
      li {
        margin: 5%;
        display: flex;
        input {
          height: 1rem;
          border-radius: 0.1rem;
          border: 1px solid #dddddd;
          padding-left: 0.8rem;
        }
        &:nth-of-type(1) {
          position: relative;
          input {
            width: 100%;
          }
          &::before {
            display: inline-block;
            content: "";
            width: 0.6rem;
            height: 0.6rem;
            background: url("../../../static/img/icon_shouji.png") no-repeat
              center/100%;
            position: absolute;
            left: 5/37.5rem;
            top: 8/37.5rem;
          }
        }
        &:nth-of-type(2) {
          display: flex;
          justify-content: space-between;
          position: relative;
          &::before {
            display: inline-block;
            content: "";
            width: 0.6rem;
            height: 0.6rem;
            background: url("../../../static/img/icon_yanzhengma.png") no-repeat
              center/100%;
            position: absolute;
            left: 5/37.5rem;
            top: 8/37.5rem;
          }
          button {
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
  }
}
</style>
