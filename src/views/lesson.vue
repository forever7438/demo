<template>
  <div class="lesson_contnet">
    <tips title="创客课程"></tips>
    <item-list v-for="(item,index) in lessonList" :key="index" itemtype="lesson" :message="item"></item-list>
  </div>
</template>

<script>
import itemList from "../components/itemList/itemList";
import tips from "../components/tips";
import { filterLessons } from "@/api/index";
export default {
  name: "lesson",
  components: {
    tips,
    itemList
  },
  data() {
    return {
      lessonList: [],
      pageSize: 20
    };
  },
  created() {
    this.searchLesson("time");
  },
  methods: {
    //获取课程
    async searchLesson(value) {
      let parmes = {
        labelId: null,
        pageNum: 1,
        pageSize: this.pageSize,
        schoolId: null,
        sort: value
      };
      let res = await filterLessons(parmes);
      if (res.data.code === 200) {
        this.lessonList = res.data.data.lessonList;
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
.lesson_contnet {
  position: relative;
  top: 1.5rem;
  margin-bottom: 2rem;
  z-index: 999999;
}
</style>