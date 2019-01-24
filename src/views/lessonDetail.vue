<template>
  <div class="detail_contnet">
    <tips title="课程详情"></tips>
    <messageDetail></messageDetail>
  </div>
</template>

<script>
import messageDetail from "../components/lesson/messageDetail";
import tips from "../components/tips";
export default {
  name: "lessonDetail",
  components: {
    tips,
    messageDetail
  },
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.detail_contnet {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>