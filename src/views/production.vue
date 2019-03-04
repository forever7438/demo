<template>
  <div class="production_contnet">
    <tips title="创客视频" :isActive="true"></tips>
    <!-- <search></search> -->
    <item-list v-for="(item,index) in videoList" :key="index" itemtype="production" :message="item"></item-list>
    <!-- <search-content></search-content> -->
  </div>
</template>

<script>
import itemList from "../components/itemList/itemList";
import tips from "../components/tips";
import search from "../components/search/search";
import searchContent from "../components/search/searchContent";
import { filterCreations, commonUserInfo } from "@/api/index";
export default {
  name: "production",
  components: {
    itemList,
    tips,
    search,
    searchContent
  },
  data() {
    return {
      userId: null,
      videoList: [],
      pageSize: 20
    };
  },
  created() {
    this.getUserInfo();
    this.searchCreation("time");
  },
  methods: {
    //获取作品
    async searchCreation(value) {
      let parmes = {
        labelId: null,
        pageNum: 1,
        pageSize: this.pageSize,
        sort: value
      };
      let res = await filterCreations(parmes);
      if (res.data.code === 200) {
        this.videoList = res.data.data.creationList;
        // this.pageInfo = res.data.data.pageInfo;
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },
    //获取当前用户信息
    async getUserInfo() {
      let res = await commonUserInfo();
      if (res.data.code === 200) {
        this.userId = res.data.data.userId;
        //存储userId在session里
        sessionStorage.setItem("userId", this.userId);
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
.production_contnet {
  position: relative;
  top: 1.5rem;
  margin-bottom: 2rem;
  z-index: 999999;
}
</style>