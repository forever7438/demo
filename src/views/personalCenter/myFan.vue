<template>
  <div class="fan_content">
    <tips title="我的粉丝"></tips>
    <fanItem v-for="(item,index) in fanList" :key="index" :item="item"></fanItem>
  </div>
</template>

<script>
import fanItem from "../../components/fanItem/fanItem";
import tips from "../../components/tips";
import { followersOfUser } from "@/api/index";
export default {
  name: "myFan",
  components: {
    fanItem,
    tips
  },
  data() {
    return {
      fanList: []
    };
  },
  created() {
    this.getFanList();
  },
  methods: {
    //获取粉丝列表
    async getFanList() {
      let res = await followersOfUser({
        userId: sessionStorage.getItem("userId"),
        pageNum: 1,
        pageSize: 10
      });
      if (res.data.code === 200) {
        this.fanList = res.data.data.followerList;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.fan_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>