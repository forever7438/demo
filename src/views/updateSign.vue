<template>
  <div class="edit_sign_content">
    <tips title="个性签名编辑" :showBtn="isShowBtn" @showBtn="isShowModel=true"></tips>
    <editSign></editSign>
    <dialogModel v-if="isShowModel">
      <dialogTitle title="是否放弃对个性签名的编辑？"></dialogTitle>
      <dialogBtn
        @cancal="isShowModel=false"
        @confirm="changeSignature"
        cancalText="放弃"
        confirmText="保存"
      ></dialogBtn>
    </dialogModel>
  </div>
</template>

<script>
import tips from "../components/tips";
import editSign from "../components/editSign";
import dialogModel from "../components/dialog/dialogModel";
import dialogTitle from "../components/dialog/dialogTitle";
import dialogBtn from "../components/dialog/dialogBtn";
import { changeSignature } from "@/api/index";
export default {
  name: "updateSign",
  components: {
    tips,
    editSign,
    dialogModel,
    dialogTitle,
    dialogBtn
  },
  data() {
    return {
      isShowBtn: false,
      isShowModel: false
    };
  },
  created() {
    if ([this.$route.name].includes("updateSign")) {
      this.isShowBtn = true;
    }
  },
  methods: {
    //修改个性签名
    async changeSignature() {
      if (!this.$store.state.data.signatrueText) {
        this.$toast({
          mask: true,
          message: "个性签名不得为空哟"
        });
        return;
      }
      if (this.$store.state.data.signatrueText.length > 128) {
        this.$toast({
          mask: true,
          message: "不能超过128个字哦"
        });
        return;
      }
      let res = await changeSignature({
        signature: this.$store.state.data.signatrueText
      });
      if (res.data.code === 200) {
        this.isShowModel = false;
        this.$toast({
          mask: true,
          message: "个性签名修改成功"
        });
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.edit_sign_content {
  position: relative;
  top: 1.5rem;
  // z-index: 999999;
}
</style>