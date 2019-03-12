<template>
  <div class="item_content">
    <div class="item_header">
      <p>
        <router-link :to="{path:'/homepage',query:{userId:message.userId}}">
          <img :src="message.avatar || img">
        </router-link>
        <span>{{message.nickName}}</span>
        <i>老师&nbsp;&nbsp;{{message.schoolName}}</i>
      </p>
      <p>
        <router-link
          tag="i"
          class="lesson_title"
          :to="{path:'/lessonDetail',query:{lessonId:message.lessonId}}"
          v-if="itemtype=='lesson'"
        >{{message.creationName || message.lessonName}}</router-link>
        <router-link
          tag="i"
          class="lesson_title"
          :to="{path:'/productionDetail',query:{creationId:message.creationId}}"
          v-else
        >{{message.creationName || message.lessonName}}</router-link>
        <span class="labels">
          <i class="fun-tag" v-for="(item,index) in message.labels" :key="index">{{item.labelName}}</i>
        </span>
      </p>
    </div>
    <div class="item_body">
      <video :src="message.videoPath" controls="controls" v-if="itemtype=='creation'"></video>
      <img v-if="itemtype=='lesson'" :src="message.coverImage">
    </div>
    <div class="item_footer">
      <div
        class="message"
        @click="like(message.lessonId||message.creationId,itemtype,message.isLiked)"
      >
        <svg class="icon like" aria-hidden="true">
          <use v-if="message.isLiked" xlink:href="#icon-dianzan"></use>
          <use v-else xlink:href="#icon-z-like"></use>
        </svg>
        <span>{{message.likeCount}}</span>
      </div>
      <div class="meun">
        <div>
          <svg
            @click="collect(message.lessonId||message.creationId,itemtype,message.isCollect)"
            class="icon"
            aria-hidden="true"
          >
            <use v-if="message.isCollect" xlink:href="#icon-shoucang"></use>
            <use v-else xlink:href="#icon-wujiaoxing_kong"></use>
          </svg>
          <span>{{message.collectCount}}</span>
        </div>
        <router-link
          v-if="itemtype=='lesson'"
          tag="div"
          :to="{path:'commentView',query:{lessonId:message.lessonId}}"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-test"></use>
          </svg>
          <span>{{message.commentCount}}</span>
        </router-link>
        <router-link
          v-else
          tag="div"
          :to="{path:'productionDetail',query:{creationId:message.creationId}}"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-test"></use>
          </svg>
          <span>{{message.commentCount}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { collect, like } from "@/api/index";
export default {
  name: "itemList",
  props: {
    itemtype: String,
    message: Object
  },
  data() {
    return {
      img: "../../../static/img/icon_touxiang02.png",
      videos: null
    };
  },
  mounted() {
    this.alonePlay();
  },
  methods: {
    //控制单个video播放
    alonePlay() {
      this.videos = document.querySelectorAll("video");
      for (let i = this.videos.length - 1; i >= 0; i--) {
        this.videos[i].addEventListener("play", () => {
          this.pasueAll(i);
        });
      }
    },
    pasueAll(index) {
      for (let j = this.videos.length - 1; j >= 0; j--) {
        if (j != index) {
          this.videos[j].pause();
        }
      }
    },
    //收藏
    async collect(targetId, type, isCollect) {
      let res = await collect({
        targetId: targetId,
        type: type
      });
      if (res.data.code === 200) {
        if (this.message.isCollect) {
          this.message.isCollect = false;
          this.message.collectCount -= 1;
        } else {
          this.message.isCollect = true;
          this.message.collectCount += 1;
        }
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    },
    //点赞
    async like(targetId, pathType, isLiked) {
      if (isLiked) {
        return;
      }
      let res = await like({
        targetId: targetId,
        type: pathType
      });
      if (res.data.code === 200) {
        this.message.isLiked = true;
        this.message.likeCount += 1;
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
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../static/less/global.less";
.item_content {
  margin: 0 0.3rem 0.3rem;
  padding-bottom: 5px;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #fff;
  .item_header {
    padding: 5px 10px;
    p {
      display: flex;
      align-items: center;
      &:nth-of-type(1) {
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          margin-right: 5px;
        }
        span {
          color: #000000;
          font-size: 0.5rem;
          margin-right: 15px;
          font-weight: 600;
        }
        i {
          font-size: 0.4rem;
          color: #838484;
        }
      }
      &:nth-of-type(2) {
        display: flex;
        // justify-content: space-between;
        .lesson_title {
          max-width: 2.5rem;
          margin-right: 0.3rem;
          font-size: 0.5rem;
          color: #3789ff;
          font-weight: 600;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .labels {
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
    }
  }
  .item_body {
    video {
      width: 100%;
      height: 5rem;
    }
    img {
      width: 100%;
      height: 5rem;
    }
  }
  .item_footer {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.5rem;
    .message {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
    .meun {
      display: flex;
      div {
        display: flex;
        align-items: center;
        span {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>