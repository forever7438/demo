<template>
  <div class="lesson_content">
    <tips title="我发布的课程"></tips>
    <div v-if="listLesson.length" class="lesson_list">
      <contentItem v-for="(item,index) in listLesson" :key="index" :item="item" genre="lesson"></contentItem>
    </div>
    <noContent v-else></noContent>
  </div>
</template>

<script>
import tips from "../../components/tips";
import contentItem from "../../components/itemList/contentItem";
import noContent from "../../components/noContent";
import { lessonOfUser } from "@/api/index";
export default {
  name: "mylesson",
  components: {
    tips,
    contentItem,
    noContent
  },
  data() {
    return {
      listLesson: []
    };
  },
  created() {
    this.getLesson();
  },
  methods: {
    //获取个人课程
    async getLesson() {
      let res = await lessonOfUser({
        userId: sessionStorage.getItem("userId"),
        pageNum: 1,
        pageSize: 10
      });
      if (res.data.code === 200) {
        this.listLesson = res.data.data.lessonnList;
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
.lesson_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
  .lesson_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0.3rem 0.3rem 0.3rem;
  }
}
</style>