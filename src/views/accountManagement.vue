<template>
  <div class="accountManagement_content">
    <tips title="账号管理"></tips>
    <headPortrait :userImg="userInfo.avatar || img"></headPortrait>
    <information :message="userInfo"></information>
    <sign :autograph="userInfo.signatrue"></sign>
    <updatePhone @Untying="isShow=true" @binding="isShow=true" :phone="userInfo.phoneNum"></updatePhone>
    <loginOut></loginOut>
    <dialogModel v-if="isShow">
      <dialogTitle title="验证码已经发送到您手机了哟~"></dialogTitle>
      <dialogPhone v-if="!userInfo.phoneNum"></dialogPhone>
      <dialogCode :phone="userInfo.phoneNum"></dialogCode>
      <dialogBtn
        v-if="!userInfo.phoneNum"
        @cancal="isShow=false"
        @confirm="bindingPhone"
        cancalText="取消"
        confirmText="绑定"
      ></dialogBtn>
      <dialogBtn
        v-else
        @cancal="isShow=false"
        @confirm="unbindingPhone"
        cancalText="取消"
        confirmText="解绑"
      ></dialogBtn>
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
import { fetchUserInfo, unbindPhone, bindPhone } from "@/api/index";
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
      isShow: false,
      userInfo: {},
      img: "../../static/img/icon_touxiang02.png"
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    //获取个人信息
    async getUserInfo() {
      let res = await fetchUserInfo({
        userId: sessionStorage.getItem("userId")
      });
      this.userInfo = res.data.data;
    },

    //手机号解绑操作
    async unbindingPhone() {
      if (!this.$store.state.data.verificationCode) {
        this.$toast.fail({
          mask: true,
          message: "请输入验证码"
        });
        return;
      }
      let res = await unbindPhone({
        phoneNum: this.userInfo.phoneNum,
        verificationCode: this.$store.state.data.verificationCode
      });
      if (res.data.code === 200) {
        this.isShow = false;
        this.getUserInfo();
        this.$toast.success({
          mask: true,
          message: "解绑成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },
    //手机号绑定操作
    async bindingPhone() {
      if (!this.$store.state.data.phoneNum) {
        this.$toast.fail({
          mask: true,
          message: "请输入手机号"
        });
        return;
      }
      if (!this.$store.state.data.verificationCode) {
        this.$toast.fail({
          mask: true,
          message: "请输入验证码"
        });
        return;
      }
      let res = await bindPhone({
        phoneNum: this.$store.state.data.phoneNum,
        verificationCode: this.$store.state.data.verificationCode
      });
      if (res.data.code === 200) {
        this.isShow = false;
        this.getUserInfo();
        this.$toast.success({
          mask: true,
          message: "绑定成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    }
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