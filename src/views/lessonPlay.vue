<template>
  <div class="lessonPlay_content">
    <tips title="章节播放"></tips>
    <chapterPlay :sectionDetail="sectionDetails"></chapterPlay>
    <commentItem :targetId="$route.query.sectionId" type="section"></commentItem>
  </div>
</template>

<script>
import tips from "../components/tips";
import chapterPlay from "../components/lesson/chapterPlay";
import commentItem from "../components/comment/commentItem";
import { sectionDetail, commentsList } from "@/api/index";
export default {
  name: "lessonPlay",
  components: {
    tips,
    chapterPlay,
    commentItem
  },
  data() {
    return {
      sectionDetails: {}
    };
  },
  created() {
    this.sectionDetail();
    this.getCommentsList(1);
  },
  methods: {
    //章节详情
    async sectionDetail() {
      let res = await sectionDetail({
        sectionId: this.$route.query.sectionId
      });
      if (res.data.code === 200) {
        this.sectionDetails = res.data.data;
        document.title = `武汉益谷-创客空间-${this.sectionDetails.sectionName}`;
        //存储点赞数量在vuex里面
        this.$store.commit("SET_LIKE_NUM", this.sectionDetails.praise);
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },
    //获取评论列表
    async getCommentsList(pageNum) {
      let parmes = {
        pageNum: pageNum,
        pageSize: 100,
        targetId: this.$route.query.sectionId,
        type: "section"
      };
      let res = await commentsList(parmes);
      if (res.data.code === 200) {
        // 获取评论列表 - 成功
        //存储评论数量于vuex里
        this.$store.commit("SET_COMMENT_NUM", res.data.data.commentList.length);
      }
    }
  }
};
</script>

<style lang='less' scoped>
.lessonPlay_content {
  position: relative;
  top: 1.5rem;
  margin-bottom: 2rem;
  // z-index: 999999;
}
</style>