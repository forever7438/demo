<template>
  <div class="login_out_content">
    <span @click="loginOut">退出登录</span>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "loginOut",
  methods: {
    //退出登录
    async loginOut() {
      Cookies.remove("token");
      sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.login_out_content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.2rem 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  color: #595958;
  font-size: 0.5rem;
  font-weight: 600;
}
</style>