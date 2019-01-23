<template>
  <div class="porduction_content">
    <tips title="我发布的视频"></tips>
  </div>
</template>

<script>
import tips from "../../components/tips";
export default {
  name: "myProduction",
  components: {
    tips
  }
};
</script>

<style lang='less' scoped>
.porduction_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>