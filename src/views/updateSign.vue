<template>
  <div class="edit_sign_content">
    <tips title="个性签名编辑" :showBtn="isShowBtn" @showBtn="isShowModel=true"></tips>
    <editSign></editSign>
    <dialogModel v-if="isShowModel">
      <dialogTitle title="是否放弃对个性签名的编辑？"></dialogTitle>
      <dialogBtn @cancal="isShowModel=false" cancalText="放弃" confirmText="继续编辑"></dialogBtn>
    </dialogModel>
  </div>
</template>

<script>
import tips from "../components/tips";
import editSign from "../components/editSign";
import dialogModel from "../components/dialog/dialogModel";
import dialogTitle from "../components/dialog/dialogTitle";
import dialogBtn from "../components/dialog/dialogBtn";
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
  methods: {}
};
</script>

<style lang="less" scoped>
.edit_sign_content {
  position: relative;
  top: 1.5rem;
  // z-index: 999999;
}
</style>