<template>
  <div class="login_content">
    <login-header title="修改密码"></login-header>
    <div class="login_bg">
      <img :src="logo_image">
    </div>
    <div class="login_message">
      <h3>益谷创客平台</h3>
      <ul>
        <li>
          <input type="password" placeholder="请输入密码">
        </li>
        <li>
          <input type="password" placeholder="请再次输入密码">
        </li>
      </ul>
      <div class="submit_btn">
        <button>确认修改</button>
      </div>
      <div class="error_message">
        <p>密码由8-12位字符组成,区分大小写</p>
      </div>
    </div>
  </div>
</template>

<script>
import loginHeader from "../../components/header/loginHeader";
export default {
  name: "updatePassword",
  components: {
    loginHeader
  },
  data() {
    return {
      logo_image: require("../../../static/img/logo.png")
    };
  },
  methods: {
    goback() {
      window.history.go(-1);
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
            background: url("../../../static/img/icon_mima.png") no-repeat
              center/100%;
            position: absolute;
            left: 5px;
            top: 8px;
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
            left: 5px;
            top: 8px;
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
        background: -moz-linear-gradient(
          right,
          #3e40e2,
          #4413b8
        ); /* Firefox 3.6 - 15 */
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
      font-size: 14px;
      p {
        &::before {
          content: "*";
          color: red;
          vertical-align: sub;
        }
      }
    }
  }
}
</style>
