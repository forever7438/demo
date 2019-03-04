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
        <i class="lesson_title">{{message.creationName || message.lessonName}}</i>
        <span class="labels">
          <i class="fun-tag" v-for="(item,index) in message.labels" :key="index">{{item.labelName}}</i>
        </span>
      </p>
    </div>
    <div class="item_body">
      <video :src="message.videoPath" controls="controls" v-if="itemtype=='production'"></video>
      <router-link
        :to="{path:'/lessonDetail',query:{lessonId:message.lessonId}}"
        v-if="itemtype=='lesson'"
      >
        <img :src="message.coverImage">
      </router-link>
    </div>
    <div class="item_footer">
      <div class="message">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
        <span>{{message.likeCount}}</span>
      </div>
      <div class="meun">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wujiaoxing_kong"></use>
          </svg>
          <span>{{message.viewTimes}}</span>
        </div>
        <div>
          <svg class="icon like" aria-hidden="true">
            <use xlink:href="#icon-z-like"></use>
          </svg>
          <span>{{message.likeCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemList",
  props: {
    itemtype: String,
    message: Object
  },
  data() {
    return {
      img: "../../../static/img/icon_touxiang02.png"
    };
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
          margin-right: 0.3rem;
          font-size: 0.5rem;
          color: #3789ff;
          font-weight: 600;
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