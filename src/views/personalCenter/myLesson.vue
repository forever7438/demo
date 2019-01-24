<template>
  <div class="lesson_content">
    <tips title="我发布的课程"></tips>
    <div class="lesson_list">
      <contentItem v-for="(item,index) in 15" :key="index"></contentItem>
    </div>
  </div>
</template>

<script>
import tips from "../../components/tips";
import contentItem from "../../components/itemList/contentItem";
export default {
  name: "mylesson",
  components: {
    tips,
    contentItem
  }
};
</script>

<style lang='less' scoped>
.lesson_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
  .lesson_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0.3rem 0.3rem 0.3rem;
  }
}
</style>