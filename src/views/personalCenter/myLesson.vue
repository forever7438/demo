<template>
  <div class="lesson_content">
    <tips title="我发布的课程"></tips>
  </div>
</template>

<script>
import tips from "../../components/tips";
export default {
  name: "mylesson",
  components: {
    tips
  }
};
</script>

<style lang='less' scoped>
.lesson_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>