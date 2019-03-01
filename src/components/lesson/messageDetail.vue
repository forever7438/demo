<template>
  <div class="message_content">
    <img :src="messageDetail.coverImage">
    <div class="message_detail">
      <h3>{{messageDetail.lessonName}}</h3>
      <div class="message_detail_head">
        <div>
          <img :src="messageDetail.avatar">
          <span>
            <p>{{messageDetail.realName}}</p>
            <p>{{messageDetail.schoolName}}&nbsp;&nbsp;六年级一班</p>
          </span>
        </div>
        <fllowBtn></fllowBtn>
      </div>
      <div class="message_detail_body">
        <div class="message_detail_desc">
          <span>章节介绍：</span>
          <span>{{messageDetail.lessonDesc}}</span>
        </div>
        <div class="message_detail_labels">
          <i class="fun-tag" v-for="(item,index) in messageDetail.labels" :key="index">{{item}}</i>
        </div>
      </div>
      <div class="message_detail_foot">
        <div class="message">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-test"></use>
          </svg>
          <span>{{messageDetail.likeCount}}</span>
        </div>
        <div class="watch">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wujiaoxing_kong"></use>
          </svg>
          <span>{{messageDetail.viewTimes}}</span>
        </div>
        <div class="report">
          <svg class="icon like" aria-hidden="true">
            <use xlink:href="#icon-z-like"></use>
          </svg>
          <span>{{messageDetail.likeCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fllowBtn from "../fllowBtn";
export default {
  name: "messageDetail",
  components: {
    fllowBtn
  },
  props: {
    messageDetail: Object
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