<template>
  <div>
    <div class="code_content">
      <span class="code">验证码:</span>
      <input type="number">
      <span class="send_code">发送</span>
    </div>
    <div class="error_message">验证码输入错误,请查证后输入</div>
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
  margin: 0.3rem auto 0;
  .code {
    flex: 3;
  }
  input {
    width: 4rem;
    margin-left: -0.7rem;
    padding: 0.1rem;
  }
  .send_code {
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