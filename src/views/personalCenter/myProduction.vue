<template>
  <div class="porduction_content">
    <tips title="我发布的视频"></tips>
    <div v-if="listCreation.length" class="production_list">
      <contentItem v-for="(item,index) in listCreation" :key="index" :item="item"></contentItem>
    </div>
    <noContent v-else></noContent>
  </div>
</template>

<script>
import tips from "../../components/tips";
import contentItem from "../../components/itemList/contentItem";
import noContent from "../../components/noContent";
import { creationOfUser } from "@/api/index";
export default {
  name: "myProduction",
  components: {
    tips,
    contentItem,
    noContent
  },
  data() {
    return {
      listCreation: [],
      userInfo: {}
    };
  },
  created() {
    this.getProduction();
  },
  methods: {
    //获取个人作品
    async getProduction() {
      let res = await creationOfUser({
        userId: sessionStorage.getItem("userId"),
        pageNum: 1,
        pageSize: 10
      });
      if (res.data.code === 200) {
        this.listCreation = res.data.data.creationList;
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
.porduction_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
  .production_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0.3rem 0.3rem 0.3rem;
  }
}
</style>