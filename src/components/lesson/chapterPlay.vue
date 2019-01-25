<template>
  <div class="message_content">
    <video src="../../../static/test1.mp4" controls="controls"></video>
    <div class="message_detail">
      <h3>基础课程</h3>
      <div class="message_detail_head">
        <div>
          <img src="../../../static/img/lf.jpg">
          <span>
            <p>路飞</p>
            <p>神龙小学&nbsp;&nbsp;六年级一班</p>
          </span>
        </div>
        <fllowBtn></fllowBtn>
      </div>
      <div class="message_detail_body">
        <div class="message_detail_desc">
          <span>章节介绍：</span>
          <span>创客基础课程以中国学生发展核心素养和中小学课程大纲为基础进行.</span>
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
            width: 4rem;
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