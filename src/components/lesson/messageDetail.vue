<template>
  <div class="message_content">
    <video v-if="type=='creation'" :src="messageDetail.videoPath" controls="controls"></video>
    <img v-else :src="messageDetail.coverImage">
    <div class="message_detail">
      <h3>{{messageDetail.lessonName || messageDetail.creationName }}</h3>
      <div class="message_detail_head">
        <div>
          <img :src="messageDetail.avatar || img">
          <span>
            <p>{{messageDetail.realName}}</p>
            <p>{{messageDetail.schoolName}}&nbsp;&nbsp;{{messageDetail.className}}</p>
          </span>
        </div>
        <fllowBtn
          :userId="messageDetail.ownerId"
          :isFollowed="messageDetail.isFollow"
          @refreshUserInfo="refreshParentInfo(type)"
        ></fllowBtn>
      </div>
      <div class="message_detail_body">
        <div class="message_detail_desc">
          <span>{{type=='creation'?'作品':'课程'}}介绍：</span>
          <span v-if="messageDetail.lessonDesc">{{messageDetail.lessonDesc}}</span>
          <span v-else>暂无{{type=='creation'?'作品':'课程'}}介绍!!!</span>
        </div>
        <div class="message_detail_labels">
          <i class="fun-tag" v-for="(item,index) in messageDetail.labels" :key="index">{{item}}</i>
        </div>
      </div>
      <div class="message_detail_foot">
        <div class="message" @click="like(type,messageDetail.isLiked)">
          <svg class="icon like" aria-hidden="true">
            <use v-if="messageDetail.isLiked" xlink:href="#icon-dianzan"></use>
            <use v-else xlink:href="#icon-z-like"></use>
          </svg>
          <span>{{messageDetail.likeCount}}</span>
        </div>
        <div class="watch" @click="collect(type)">
          <svg class="icon" aria-hidden="true">
            <use v-if="messageDetail.isCollect" xlink:href="#icon-shoucang"></use>
            <use v-else xlink:href="#icon-wujiaoxing_kong"></use>
          </svg>
          <span>{{messageDetail.collectCount}}</span>
        </div>
        <div class="report">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-test"></use>
          </svg>
          <span>{{messageDetail.commentCount || commentNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fllowBtn from "../fllowBtn";
import { collect, like } from "@/api/index";
export default {
  name: "messageDetail",
  components: {
    fllowBtn
  },
  props: {
    messageDetail: Object,
    type: String,
    commentNum: Number
  },
  data() {
    return {
      img: "../../../static/img/icon_touxiang02.png"
    };
  },
  methods: {
    //刷新父级数据
    refreshParentInfo(type) {
      if (type === "lesson") {
        this.$parent.lessonDetails();
      } else {
        this.$parent.creationDetail();
      }
    },
    //点赞
    async like(pathType, isLiked) {
      if (isLiked) {
        return;
      }
      let res = await like({
        targetId:
          this.$route.query.lessonId ||
          this.$route.query.sectionId ||
          this.$route.query.creationId,
        type: pathType
      });
      if (res.data.code === 200) {
        if (pathType === "lesson") {
          this.$parent.lessonDetails();
        } else {
          this.$parent.creationDetail();
        }
        this.$toast.success({
          mask: true,
          message: "点赞成功"
        });
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    },
    //收藏
    async collect(type) {
      let res = await collect({
        targetId:
          this.$route.query.lessonId ||
          this.$route.query.sectionId ||
          this.$route.query.creationId,
        type: type
      });
      if (res.data.code === 200) {
        if (type === "lesson") {
          this.$parent.lessonDetails();
        } else {
          this.$parent.creationDetail();
        }
        this.$toast.success({
          mask: true,
          message: "收藏成功"
        });
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../static/less/global.less";
.message_content {
  margin: 0 0.3rem 0.3rem;
  padding-bottom: 5px;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #fff;
  img {
    width: 100%;
    height: 4.5rem;
  }
  video {
    width: 100%;
    height: 4.5rem;
  }
  .message_detail {
    h3 {
      text-align: left;
      padding-left: 0.2rem;
      font-size: 0.5rem;
    }
    .message_detail_head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.2rem;
      div {
        display: flex;
        align-items: center;
        img {
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 50%;
          border: 1px solid #358dfd;
          margin-right: 5px;
        }
        span {
          color: #ddd;
          font-size: 0.4rem;
          p {
            &:nth-of-type(1) {
              text-align: left;
              color: #358dfd;
              font-weight: 600;
            }
          }
        }
      }
    }
    .message_detail_body {
      padding: 0 0.2rem;
      .message_detail_desc {
        display: flex;
        span {
          font-size: 0.4rem;
          font-weight: 600;
          text-align: left;
          &:nth-of-type(1) {
            margin-right: 0.5rem;
          }
          &:nth-of-type(2) {
            margin-left: -0.5rem;
            width: 7rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
          }
        }
      }
      .message_detail_labels {
        text-align: left;
        margin: 0.1rem 0 0.1rem 0.1rem;
        font-size: 0.4rem;
        .fun-tag {
          margin-right: 0.6rem !important;
          color: #f9fdfe;
          &:nth-of-type(1) {
            .global-fun-tag(0.8rem, #86bbe1);
          }
          &:nth-of-type(2) {
            .global-fun-tag(0.8rem, #98dd80);
          }
          &:nth-of-type(3) {
            .global-fun-tag(0.8rem, #efa096);
          }
        }
      }
    }
    .message_detail_foot {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      div {
        margin-right: 0.2rem;
        display: flex;
        align-items: center;
        font-size: 0.5rem;
        svg {
          margin-right: 0.1rem;
        }
      }
    }
  }
}
</style>