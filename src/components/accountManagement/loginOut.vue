<template>
  <div class="login_out_content">
    <router-link to="/login" tag="span">退出登录</router-link>
  </div>
</template>

<script>
export default {
  name: "loginOut"
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