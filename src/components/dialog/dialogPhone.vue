<template>
  <div class="phone_content">
    <span>手机号码:</span>
    <input type="number">
  </div>
</template>

<script>
export default {
  name: "dialogPhone"
};
</script>

<style lang='less' scoped>
.phone_content {
  display: flex;
  align-items: center;
  font-size: 0.45rem;
  span {
    flex: 2;
    text-align: left;
  }
  input {
    flex: 7;
    padding: 0.1rem;
  }
}
</style>