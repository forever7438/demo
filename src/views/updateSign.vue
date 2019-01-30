<template>
  <div class="edit_sign_content">
    <tips title="个性签名编辑"></tips>
    <editSign></editSign>
  </div>
</template>

<script>
import tips from "../components/tips";
import editSign from "../components/editSign";
export default {
  name: "updateSign",
  components: {
    tips,
    editSign
  }
};
</script>

<style lang="less" scoped>
.edit_sign_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>