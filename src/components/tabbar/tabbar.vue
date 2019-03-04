<template>
  <div class="tabbar_content" v-if="isShow">
    <ul class="tabbar_play" v-if="this.$route.name=='lessonPlay'">
      <li @click="like">
        <span>点赞 {{sectionDetails.praise}}</span>
      </li>
      <li @click="comment">
        <span>评论 {{commentList.length}}</span>
      </li>
      <li @click="collection">
        <span>收藏 {{sectionDetails.praise}}</span>
      </li>
    </ul>
    <ul class="tabbar" v-else>
      <li>
        <router-link to="/production" tag="p" active-class="isProduction"></router-link>
      </li>
      <li>
        <router-link to="/lesson" tag="p" active-class="isLesson"></router-link>
      </li>
      <li>
        <router-link to="/personal" tag="p" active-class="isPersonal"></router-link>
      </li>
    </ul>
    <dialogModel v-if="isShowModel">
      <dialogText></dialogText>
      <dialogBtn cancalText="取消" confirmText="确定" @cancal="isShowModel=false" @confirm="handle"></dialogBtn>
    </dialogModel>
  </div>
</template>

<script>
import dialogModel from "../dialog/dialogModel";
import dialogText from "../dialog/dialogText";
import dialogBtn from "../dialog/dialogBtn";
import { sectionDetail, comment, commentsList, like } from "@/api/index";
export default {
  name: "Navigator",
  components: {
    dialogModel,
    dialogText,
    dialogBtn
  },
  props: {
    likeType: String
  },
  data() {
    return {
      active: 0,
      isShow: true,
      isShowModel: false,
      sectionDetails: {},
      commentList: []
    };
  },
  created() {
    this.showBar(this.$route.name);
    this.sectionDetail();
    this.getCommentsList(1);
  },
  methods: {
    showBar(name) {
      const pathName = [
        "login",
        "quickLogin",
        "forgetPassword",
        "updatePassword",
        "myFan",
        "myFllow",
        "myCollection",
        "myLesson",
        "myProduction",
        "mySetting",
        "myMessage",
        "lessonDetail",
        "homepage",
        "accountManagement",
        "updateSign"
      ];
      if (pathName.includes(name)) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
    //章节详情
    async sectionDetail() {
      let res = await sectionDetail({
        sectionId: this.$route.query.sectionId
      });
      if (res.data.code === 200) {
        this.sectionDetails = res.data.data;
      }
    },
    //获取评论列表
    async getCommentsList(pageNum) {
      let parmes = {
        pageNum: pageNum,
        pageSize: 100,
        targetId: this.$route.query.sectionId,
        type: this.likeType
      };
      let res = await commentsList(parmes);
      if (res.data.code === 200) {
        // 获取评论列表 - 成功
        this.commentList = res.data.data.commentList;
      }
    },
    //点赞
    async like() {
      if (this.sectionDetails.isLiked) {
        return;
      }
      let res = await like({
        targetId: this.$route.query.sectionId,
        type: this.likeType
      });
      if (res.data.code === 200) {
        this.sectionDetail();
        this.$toast.success({
          mask: true,
          message: "点赞成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },
    comment() {
      this.isShowModel = true;
    },
    collection() {
      this.$toast.success("收藏成功");
    },
    //提交评论内容
    async handle() {
      if (!this.$store.state.data.text) {
        this.isShowModel = false;
        this.$toast.fail({
          mask: true,
          message: "内容不得为空"
        });
        return;
      }
      this.$store.commit("SET_STATE");
      let res = await comment({
        type: this.likeType,
        content: this.$store.state.data.text,
        targetId:
          this.$route.query.creationId ||
          this.$route.query.sectionId ||
          this.$route.query.lessonId ||
          this.$route.query.userId ||
          sessionStorage.getItem("userId")
      });
      if (res.data.code === 200) {
        this.$store.commit("CLEAR_STATE");
        this.getCommentsList(1);
        this.$toast.success({
          mask: true,
          message: "评论成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
      this.isShowModel = false;
      this.$store.commit("CLEAR_TEXT");
    }
  },
  watch: {
    $route(to, from) {
      this.showBar(to.name);
      this.getCommentsList(1);
    }
  }
};
</script>

<style lang="less" scoped>
.tabbar_content {
  width: 100%;
  height: 1.8rem;
  position: fixed;
  z-index: 999999999;
  left: 0;
  bottom: 0;

  .tabbar {
    width: 100%;
    height: 100%;
    background: url("../../../static/img/bj_002.png") no-repeat center/100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0 0;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      p {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
      }
      .isProduction {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
        background: url("../../../static/img/icon_shipin04.png") no-repeat
          center/100% !important;
      }
      .isLesson {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
        background: url("../../../static/img/icon_kecheng04.png") no-repeat
          center/100% !important;
      }
      .isPersonal {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
        background: url("../../../static/img/icon_wode04.png") no-repeat
          center/100% !important;
      }
      &:nth-of-type(1) {
        p {
          background: url("../../../static/img/icon_shipin03.png") no-repeat
            center/100%;
        }
      }
      &:nth-of-type(2) {
        p {
          background: url("../../../static/img/icon_kecheng03.png") no-repeat
            center/100%;
        }
      }
      &:nth-of-type(3) {
        p {
          background: url("../../../static/img/icon_wode03.png") no-repeat
            center/100%;
        }
      }
    }
  }
  .tabbar_play {
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid #ddd;
    border-radius: 0.5rem 0.5rem 0 0;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      span {
        font-size: 0.5rem;
        font-weight: 600;
      }
      &:nth-of-type(1) {
        border-right: 1px solid #dddddd;
        span {
          &::before {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
            content: "";
            background: url("../../../static/img/icon_dianzan01.png") no-repeat
              center/100%;
            vertical-align: sub;
          }
        }
      }
      &:nth-of-type(2) {
        border-right: 1px solid #dddddd;
        span {
          &::before {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
            content: "";
            background: url("../../../static/img/icon-pinglun01.png") no-repeat
              center/100%;
            vertical-align: sub;
          }
        }
      }
      &:nth-of-type(3) {
        span {
          &::before {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
            content: "";
            background: url("../../../static/img/icon_shoucang02.png") no-repeat
              center/100%;
            vertical-align: sub;
          }
        }
      }
    }
  }
}
</style>
