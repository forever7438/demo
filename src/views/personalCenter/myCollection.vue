<template>
  <div class="collection_content">
    <tips title="我的收藏"></tips>
    <div class="tab_list">
      <p :class="{isActive:isCheckA}" @click="tabA">收藏视频</p>
      <p :class="{isActive:isCheckB}" @click="tabB">收藏课程</p>
    </div>
    <div v-if="flag&&checkList.length" class="collection_list">
      <contentItem v-for="(item,index) in 10" :key="index"></contentItem>
    </div>
    <noContent v-else></noContent>
  </div>
</template>

<script>
import tips from "../../components/tips";
import contentItem from "../../components/itemList/contentItem";
import noContent from "../../components/noContent";
import { getCollectCreationList, getCollectLessonList } from "@/api/index";
export default {
  name: "myCollection",
  components: {
    tips,
    contentItem,
    noContent
  },
  data() {
    return {
      flag: false,
      collectionCreationList: [],
      collectionLessonList: [],
      checkList: null,
      isCheckA: true,
      isCheckB: false
    };
  },
  created() {
    this.getCollectCreationList();
    this.getCollectLessonList();
  },
  methods: {
    //获取收藏视频
    async getCollectCreationList() {
      let res = await getCollectCreationList();
      if (res.data.code === 200) {
        this.flag = true;
        this.collectionCreationList = res.data.data;
        this.checkList = this.collectionCreationList;
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    },
    //获取收藏课程
    async getCollectLessonList() {
      let res = await getCollectLessonList();
      if (res.data.code === 200) {
        this.collectionLessonList = res.data.data;
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    },
    //切换A
    tabA() {
      this.isCheckA = true;
      this.isCheckB = false;
      this.checkList = this.collectionCreationList;
    },
    //切换B
    tabB() {
      this.isCheckA = false;
      this.isCheckB = true;
      this.checkList = this.collectionLessonList;
    }
  }
};
</script>

<style lang='less' scoped>
.collection_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
  .tab_list {
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0 0.5rem;
    margin: 0 0.3rem 0.3rem 0.3rem;
    box-shadow: #c5dcff 0 1px 5px 1px;
    border-radius: 0.2rem;
    background: #ffffff;
    p {
      font-size: 0.5rem;
      color: #595958;
      font-weight: 600;
      margin-right: 1rem;
    }
    .isActive {
      color: #8474ea;
      border-bottom: 4px solid #8474ea;
    }
  }
  .collection_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0.3rem 0.3rem 0.3rem;
  }
}
</style>