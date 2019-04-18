<template>
  <div class="tabbar_content" v-if="isShow">
    <ul class="tabbar_play" v-if="['productionDetail','commentView'].includes($route.name)">
      <li @click="like(pathType,isLiked)">
        <span :class="{isLike:isLiked}">点赞 {{likeNum}}</span>
      </li>
      <li @click="comment">
        <span>评论 {{commentNum}}</span>
      </li>
      <li @click="collection(pathType,isCollection)">
        <span :class="{isCollection:isCollection}">收藏 {{collectCount}}</span>
      </li>
    </ul>

    <dialogModel v-if="isShowModel">
      <dialogText></dialogText>
      <dialogBtn
        cancalText="取消"
        confirmText="确定"
        @cancal="isShowModel=false"
        @confirm="handle(pathType)"
      ></dialogBtn>
    </dialogModel>
  </div>
</template>

<script>
import dialogModel from "../dialog/dialogModel";
import dialogText from "../dialog/dialogText";
import dialogBtn from "../dialog/dialogBtn";
import { comment, like, collect } from "@/api/index";
export default {
  name: "tabbarList",
  components: {
    dialogModel,
    dialogText,
    dialogBtn
  },
  props: {
    pathType: String,
    likeNum: Number,
    commentNum: Number,
    isLiked: Boolean,
    collectCount: Number,
    isCollection: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      active: 0,
      isShow: true,
      isShowModel: false
    };
  },

  created() {
    this.showBar(this.$route.name);
  },
  methods: {
    showBar(name) {
      const pathName = ["productionDetail", "commentView"];
      if (pathName.includes(name)) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    //点赞
    async like(pathType, isLiked) {
      if (isLiked) {
        this.$dialog
          .confirm({
            title: "",
            message: "是否取消点赞"
          })
          .then(() => {
            this.likes(pathType);
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.likes(pathType);
      }
    },
    async likes(pathType) {
      let res = await like({
        targetId: this.$route.query.sectionId || this.$route.query.creationId,
        type: pathType
      });
      if (res.data.code === 200) {
        if (pathType === "section") {
          this.$parent.sectionDetail();
        } else if (pathType === "lesson") {
          this.commentNum += 1;
        } else {
          this.$parent.creationDetail();
        }
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    },
    comment() {
      this.isShowModel = true;
    },
    //收藏
    async collection(pathType, isCollection) {
      if (isCollection) {
        this.$dialog
          .confirm({
            title: "",
            message: "是否取消收藏"
          })
          .then(() => {
            this.colles(pathType);
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.colles(pathType);
      }
    },
    async colles(pathType) {
      let res = await collect({
        targetId: this.$route.query.lessonId || this.$route.query.creationId,
        type: pathType
      });
      if (res.data.code === 200) {
        this.$toast.success({
          mask: true,
          message: "收藏成功"
        });
        if (pathType === "section") {
          this.$parent.sectionDetail();
        } else {
          this.$parent.creationDetail();
        }
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    },
    //提交评论内容
    async handle(pathType) {
      if (!this.$store.state.data.text) {
        this.isShowModel = false;
        this.$toast.fail({
          mask: true,
          message: "内容不得为空"
        });
        return;
      }
      let res = await comment({
        type: pathType,
        content: this.$store.state.data.text,
        targetId:
          this.$route.query.creationId ||
          this.$route.query.sectionId ||
          this.$route.query.lessonId ||
          this.$route.query.userId ||
          sessionStorage.getItem("userId")
      });
      if (res.data.code === 200) {
        this.$emit("getCommentList");
        this.$parent.getCommentsList(1);
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
        .isLike {
          &::before {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
            content: "";
            background: url("../../../static/img/icon_dianzan02.png") no-repeat
              center/100% !important;
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
            background: url("../../../static/img/icon_shoucang01.png") no-repeat
              center/100%;
            vertical-align: sub;
          }
        }
        .isCollection {
          &::before {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
            content: "";
            background: url("../../../static/img/icon_shoucang02.png") no-repeat
              center/100% !important;
            vertical-align: sub;
          }
        }
      }
    }
  }
}
</style>
