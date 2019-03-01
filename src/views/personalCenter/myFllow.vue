<template>
  <div class="fllow_contnet">
    <tips title="我的关注"></tips>
    <fanItem v-for="(item,index) in fllowList" :key="index" :item="item"></fanItem>
  </div>
</template>

<script>
import fanItem from "../../components/fanItem/fanItem";
import tips from "../../components/tips";
import { followedByUser } from "@/api/index";
export default {
  name: "myFllow",
  components: {
    fanItem,
    tips
  },
  data() {
    return {
      fllowList: []
    };
  },
  created() {
    this.getFllowList();
  },
  methods: {
    //获取关注列表
    async getFllowList() {
      let res = await followedByUser({
        userId: sessionStorage.getItem("userId"),
        pageNum: 1,
        pageSize: 10
      });
      if (res.data.code === 200) {
        this.fllowList = res.data.data.followerList;
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    }
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