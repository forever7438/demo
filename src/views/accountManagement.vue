<template>
  <div class="accountManagement_content">
    <tips title="账户管理"></tips>
  </div>
</template>

<script>
import tips from "../components/tips";
export default {
  name: "accountManagement",
  components: {
    tips
  }
};
</script>

<style lang='less' scoped>
.accountManagement {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>