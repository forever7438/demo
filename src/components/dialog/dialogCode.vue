<template>
  <div class="code_content">
    <span class="code">验证码:</span>
    <input type="number">
    <span class="send_code">发送</span>
  </div>
</template>

<script>
export default {
  name: "dialogCode"
};
</script>

<style lang='less' scoped>
.code_content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.45rem;
  margin: 0.3rem auto;
  .code {
    flex: 3;
  }
  input {
    flex: 5;
    padding: 0.1rem;
  }
  .send_code {
    line-height: 0.8rem;
    flex: 2;
    margin-left: 0.2rem;
    background: #3688ff;
    border-radius: 0.1rem;
    color: #ffffff;
  }
}
</style>