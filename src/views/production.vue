<template>
  <div class="production_contnet">
    <tips title="创客视频"></tips>
    <item-list v-for="(item,index) in videoList" :key="index"></item-list>
  </div>
</template>

<script>
import itemList from "../components/itemList/itemList";
import tips from "../components/tips";
export default {
  name: "production",
  components: {
    itemList,
    tips
  },
  data() {
    return {
      videoList: [1, 2, 3, 4, 5, 6, 7]
    };
  }
};
</script>

<style lang='less' scoped>
.production_contnet {
  position: relative;
  top: 1.5rem;
  margin-bottom: 2rem;
  z-index: 999999;
}
</style>