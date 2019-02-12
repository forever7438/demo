<template>
  <div class="accountManagement_content">
    <tips title="账号管理"></tips>
    <headPortrait></headPortrait>
    <information></information>
    <sign></sign>
    <updatePhone @Untying="isShow=true"></updatePhone>
    <loginOut></loginOut>
    <dialogModel v-if="isShow">
      <dialogTitle title="验证码已经发送到您手机了哟~"></dialogTitle>
      <!-- <dialogPhone></dialogPhone> -->
      <dialogCode></dialogCode>
      <dialogBtn @cancal="isShow=false" cancalText="取消" confirmText="解绑"></dialogBtn>
    </dialogModel>
  </div>
</template>

<script>
import tips from "../components/tips";
import headPortrait from "../components/accountManagement/headPortrait";
import updatePhone from "../components/accountManagement/updatePhone";
import loginOut from "../components/accountManagement/loginOut";
import information from "../components/accountManagement/information";
import sign from "../components/accountManagement/sign";
import dialogModel from "../components/dialog/dialogModel";
import dialogTitle from "../components/dialog/dialogTitle";
import dialogPhone from "../components/dialog/dialogPhone";
import dialogCode from "../components/dialog/dialogCode";
import dialogBtn from "../components/dialog/dialogBtn";
export default {
  name: "accountManagement",
  components: {
    tips,
    headPortrait,
    updatePhone,
    loginOut,
    information,
    sign,
    dialogModel,
    dialogTitle,
    dialogPhone,
    dialogCode,
    dialogBtn
  },
  data() {
    return {
      isShow: false
    };
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