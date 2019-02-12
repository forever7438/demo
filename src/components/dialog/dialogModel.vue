<template>
  <div class="dialog_content">
    <div class="dialog_box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialogModel"
};
</script>

<style lang='less' scoped>
.dialog_content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  .dialog_box {
    width: 90%;
    margin: 6rem auto;
    padding: 0.2rem 0.2rem 0 0.2rem;
    border-radius: 0.1rem;
    border-top: 0.2rem solid #3688ff;
    background: #ffffff;
  }
}
</style>