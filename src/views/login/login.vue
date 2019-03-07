<template>
  <div class="login_content">
    <div class="login_bg">
      <img :src="logo_image">
    </div>
    <div class="login_message">
      <h3>益谷创客平台</h3>
      <ul>
        <li>
          <input type="text" placeholder="请输入用户名/学号/工号/身份证/手机号码" v-model="parmes.account">
        </li>
        <li>
          <input type="password" placeholder="请输入密码" v-model="parmes.password">
        </li>
      </ul>
      <div class="submit_btn">
        <button @click="login">{{btnMessage}}</button>
      </div>
      <div class="error_message">
        <router-link to="/forgetPassword" tag="p">忘记密码?</router-link>
        <router-link to="/quickLogin" class="login_link">手机号码快速登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import Cookies from "js-cookie";
import { loginIn, secretLogin, loginCheck, party } from "@/api/index";
export default {
  name: "login",
  data() {
    return {
      logo_image: require("../../../static/img/logo.png"),
      parmes: {
        account: null,
        password: null
      },
      btnMessage: "登录"
    };
  },
  created() {
    //阻止浏览器后退
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
  methods: {
    //登录
    async login() {
      if (!this.parmes.account && !this.parmes.password) {
        this.$toast.fail({
          mask: true,
          message: "账户不得为空"
        });
        return;
      }
      if (this.parmes.account && !this.parmes.password) {
        this.$toast.fail({
          mask: true,
          message: "密码不得为空"
        });
        return;
      }
      this.btnMessage = "登录中...";
      //密码进行md5加密
      var res = await loginIn({
        account: this.parmes.account,
        password: md5(`maker{${this.parmes.password}}`)
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
        this.parmes.account = null;
        this.parmes.password = null;
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    }
  }
};
</script>
<style lang='less' scoped>
.login_content {
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
    font-size: 0.5rem;
    font-weight: 600;
    ul {
      li {
        margin: 5%;
        display: flex;
        font-size: 0.4rem;
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
            background: url("../../../static/img/icon_yonghu.png") no-repeat
              center/100%;
            position: absolute;
            left: 5/37.5rem;
            top: 8/37.5rem;
          }
        }
        &:nth-of-type(2) {
          position: relative;
          input {
            width: 100%;
          }
          &::before {
            display: inline-block;
            content: "";
            width: 0.6rem;
            height: 0.6rem;
            background: url("../../../static/img/icon_mima.png") no-repeat
              center/100%;
            position: absolute;
            left: 5/37.5rem;
            top: 8/37.5rem;
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
        background: -webkit-linear-gradient(left, #3e40e2, #4413b8);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(
          right,
          #3e40e2,
          #4413b8
        ); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #3e40e2, #4413b8);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #3e40e2, #4413b8);
      }
    }
    .error_message {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      font-size: 14/37.5rem;
      p {
        color: #0370df;
      }
      .login_link {
        color: #239b4a;
      }
    }
  }
}
</style>
