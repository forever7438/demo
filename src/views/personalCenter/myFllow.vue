<template>
  <div class="fllow_contnet">
    <tips title="我的关注"></tips>
    <fanItem v-for="(item,index) in fanList" :key="index"></fanItem>
  </div>
</template>

<script>
import fanItem from "../../components/fanItem/fanItem";
import tips from "../../components/tips";
export default {
  name: "myFllow",
  components: {
    fanItem,
    tips
  },
  data() {
    return {
      fanList: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  }
};
</script>

<style lang='less' scoped>
.fllow_contnet {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>