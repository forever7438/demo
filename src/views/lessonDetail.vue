<template>
  <div class="detail_contnet">
    <tips title="课程详情"></tips>
    <messageDetail :messageDetail="lessonDetail" type="lesson"></messageDetail>
    <lessonDesc :lessonDesc="lessonDetail.sections"></lessonDesc>
  </div>
</template>

<script>
import messageDetail from "../components/lesson/messageDetail";
import lessonDesc from "../components/lesson/lessonDesc";
import tips from "../components/tips";
import { lessonDetail } from "@/api/index";
export default {
  name: "lessonDetail",
  components: {
    tips,
    messageDetail,
    lessonDesc
  },
  data() {
    return {
      lessonDetail: {}
    };
  },
  created() {
    this.lessonDetails();
  },
  methods: {
    //课程详情
    async lessonDetails() {
      let res = await lessonDetail({
        lessonId: this.$route.query.lessonId
      });
      if (res.data.code === 200) {
        this.lessonDetail = res.data.data;
        document.title = `武汉益谷-创客空间-${this.lessonDetail.lessonName}`;
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
.detail_contnet {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>