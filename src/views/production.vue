<template>
  <div class="production_contnet">
    <tips title="创客视频" :isActive="true"></tips>
    <!-- <search></search> -->
    <van-pull-refresh v-model="isLoading" @refresh="randomCreationsList">
      <item-list v-for="(item,index) in videoList" :key="index" itemtype="creation" :message="item"></item-list>
    </van-pull-refresh>
    <!-- <search-content></search-content> -->
  </div>
</template>

<script>
import itemList from "../components/itemList/itemList";
import tips from "../components/tips";
import search from "../components/search/search";
import searchContent from "../components/search/searchContent";
import { commonUserInfo, randomCreations } from "@/api/index";
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
      videoList: [],
      isLoading: false
    };
  },
  created() {
    this.getUserInfo();
    this.randomCreationsList();
  },
  methods: {
    //随机获取作品视频
    async randomCreationsList() {
      let res = await randomCreations();
      if (res.data.code === 200) {
        this.isLoading = false;
        this.videoList = res.data.data.creationList;
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
        //存储userId  userImage在session里
        sessionStorage.setItem("userId", res.data.data.userId);
        sessionStorage.setItem("userImage", res.data.data.avatar);
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