<template>
  <div class="login_content">
    <div class="header_shade">
      <span :class="['header_back']" @click="goback">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui-copy"></use>
        </svg>
      </span>
      <span class="header_title">忘记密码</span>
    </div>
    <div class="login_bg">
      <img :src="logo_image">
    </div>
    <div class="login_message">
      <h3>益谷创客平台</h3>
      <ul>
        <li>
          <input type="number" placeholder="请输入手机号码">
        </li>
        <li>
          <input type="number" placeholder="请输入验证码">
          <button>发送验证码</button>
        </li>
      </ul>
      <div class="submit_btn">
        <button>下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forgetPassword",
  data() {
    return {
      logo_image: require("../../../static/img/logo.png")
    };
  },
  methods: {
    goback() {
      window.history.go(-1);
    }
  },
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
    ul {
      li {
        margin: 5%;
        display: flex;
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
        background: -webkit-linear-gradient(left, #3e40e2, #4413b8);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #3e40e2, #4413b8);
        /* Opera 11.1 - 12.0 */
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
