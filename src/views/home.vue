<template>
    <div class="home_contnet">
       <item-list v-for="(item,index) in videoList" :key="index"></item-list>
    </div>
</template>

<script>
import itemList from "../components/itemList/itemList";
export default {
  name: "home",
  components: {
    itemList
  },
  data() {
    return {
      videoList: [1, 2, 3, 4, 5, 6, 7]
    };
  }
};
</script>

<style lang='less' scoped>
.home_contnet {
  position: relative;
  top: 1.8rem;
  margin-bottom: 2rem;
  z-index: 666666;
}
</style>