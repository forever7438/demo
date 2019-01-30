<template>
  <div class="lesson_contnet">
    <tips title="创客课程"></tips>
    <item-list v-for="(item,index) in 10" :key="index" itemtype="lesson"></item-list>
  </div>
</template>

<script>
import itemList from "../components/itemList/itemList";
import tips from "../components/tips";
export default {
  name: "lesson",
  components: {
    tips,
    itemList
  }
};
</script>

<style lang='less' scoped>
.lesson_contnet {
  position: relative;
  top: 1.5rem;
  margin-bottom: 2rem;
  z-index: 999999;
}
</style>