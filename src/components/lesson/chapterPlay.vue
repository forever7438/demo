<template>
  <div class="message_content">
    <video :src="sectionDetail.videoPath" controls="controls"></video>
    <div class="message_detail">
      <h3>{{sectionDetail.sectionName}}</h3>
      <div class="message_detail_head">
        <div>
          <img :src="sectionDetail.avatar || img">
          <span>
            <p>{{sectionDetail.realName}}</p>
            <p>{{sectionDetail.sectionName}}&nbsp;&nbsp;六年级一班</p>
          </span>
        </div>
        <fllowBtn
          :userId="sectionDetail.userId"
          :isFollowed="sectionDetail.isFollow"
          @refreshUserInfo="getParentInfo"
        ></fllowBtn>
      </div>
      <div class="message_detail_body">
        <div class="message_detail_desc">
          <span>章节介绍：</span>
          <span>{{sectionDetail.sectionDesc}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fllowBtn from "../fllowBtn";
export default {
  name: "chapterPlay",
  components: {
    fllowBtn
  },
  props: {
    sectionDetail: Object
  },
  data() {
    return {
      img: "../../../static/img/icon_touxiang02.png"
    };
  },
  methods: {
    getParentInfo() {
      this.$parent.sectionDetail();
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
          color: #838484;
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
            // width: 4rem;
            margin-right: 0.5rem;
          }
          &:nth-of-type(2) {
            margin-left: -0.5rem;
          }
        }
      }
    }
  }
}
</style>