<template>
  <div class="accountManagement_content">
    <tips title="账号管理"></tips>
    <headPortrait></headPortrait>
    <information></information>
    <sign></sign>
    <updatePhone></updatePhone>
    <loginOut></loginOut>
  </div>
</template>

<script>
import tips from "../components/tips";
import headPortrait from "../components/accountManagement/headPortrait";
import updatePhone from "../components/accountManagement/updatePhone";
import loginOut from "../components/accountManagement/loginOut";
import information from "../components/accountManagement/information";
import sign from "../components/accountManagement/sign";
export default {
  name: "accountManagement",
  components: {
    tips,
    headPortrait,
    updatePhone,
    loginOut,
    information,
    sign
  }
};
</script>

<style lang='less' scoped>
.accountManagement_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>