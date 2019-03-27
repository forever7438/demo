<template>
  <div class="detail_contnet">
    <tips title="作品详情"></tips>
    <messageDetail :messageDetail="creationDetails" type="creation" :commentNum="commentNum"></messageDetail>
    <commentItem :targetId="$route.query.creationId" type="creation" ref="comment"></commentItem>
    <tabbarList
      :commentNum="commentNum"
      :likeNum="creationDetails.likeCount"
      :collectCount="creationDetails.collectCount"
      pathType="creation"
      :isLiked="creationDetails.isLiked"
      :isCollection="creationDetails.isCollect"
      @getCommentList="getSonList"
    ></tabbarList>
  </div>
</template>

<script>
import commentItem from "../components/comment/commentItem";
import messageDetail from "../components/lesson/messageDetail";
import tips from "../components/tips";
import tabbarList from "../components/tabbar/tabbarList";
import { creationDetail, commentsList } from "@/api/index";
export default {
  name: "productionDetail",
  components: {
    commentItem,
    messageDetail,
    tips,
    tabbarList
  },
  data() {
    return {
      creationDetails: {},
      commentNum: null
    };
  },
  created() {
    this.creationDetail();
    this.getCommentsList(1);
  },
  methods: {
    //调用子组件刷新评论列表
    getSonList() {
      this.$refs.comment.getCommentsList(1);
    },
    //作品详情
    async creationDetail() {
      let res = await creationDetail({
        creationId: this.$route.query.creationId
      });
      if (res.data.code === 200) {
        this.creationDetails = res.data.data;
        document.title = `武汉益谷-创客空间-${
          this.creationDetails.creationName
        }`;
      } else {
        this.$toast({
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
        targetId: this.$route.query.creationId,
        type: "creation"
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
.detail_contnet {
  position: relative;
  top: 1.5rem;
  margin-bottom: 2rem;
  z-index: 999999;
}
</style>