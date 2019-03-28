<template>
  <div class="comment_view_content">
    <tips :title="`共有${commentNum}条评论`"></tips>
    <commentItem
      :targetId="$route.query.lessonId"
      type="lesson"
      @getCommentNum="getNum"
      ref="comment"
    ></commentItem>
    <operationList pathType="lesson" @getCommentList="getSonList"></operationList>
  </div>
</template>

<script>
import tips from "../components/tips";
import commentItem from "../components/comment/commentItem";
import operationList from "../components/tabbar/operationList";
import { lessonDetail, commentsList } from "@/api/index";
export default {
  name: "commentView",
  components: {
    tips,
    commentItem,
    operationList
  },
  props: {},
  data() {
    return {
      lessonDetail: {},
      commentNum: null
    };
  },
  created() {
    this.lessonDetails();
    this.getCommentsList(1);
  },
  methods: {
    //调用子组件刷新评论列表
    getSonList() {
      this.$refs.comment.getCommentsList(1);
    },
    getNum(num) {
      // this.commentNum = num;
    },
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
    },
    //获取评论列表
    async getCommentsList(pageNum) {
      let parmes = {
        pageNum: pageNum,
        pageSize: 100,
        targetId: this.$route.query.lessonId,
        type: "lesson"
      };
      let res = await commentsList(parmes);
      if (res.data.code === 200) {
        // 获取评论列表 - 成功
        this.commentNum = res.data.data.commentList.length;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.comment_view_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
  margin-bottom: 2rem;
}
</style>