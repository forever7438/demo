<template>
  <div v-if="isShow">
    <div class="header_content"></div>
  </div>
</template>

<script>
export default {
  name: "webHeader",
  data() {
    return {
      isShow: true,
      isActive: false
    };
  },
  created() {
    if (
      ["login", "quickLogin", "forgetPassword", "updatePasswprd"].includes(
        this.$route.name
      )
    ) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
};
</script>
<style lang="less" scoped>
.isActive {
  display: none;
}
.header_content {
  width: 100%;
  height: 4.5rem;
  background: url("../../../static/img/bj-001.png") no-repeat center/100%;
  position: fixed;
  box-sizing: border-box;
}
</style>