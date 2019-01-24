<template>
  <div class="item_content">
    <div class="item_header">
      <p>
        <img src="../../../static/img/icon_touxiang01.png" alt>
        <span>真实姓名</span>
        <i>老师&nbsp;&nbsp;神龙小学</i>
      </p>
      <p>
        <i class="lesson_title">基础课程</i>
        <span class="labels">
          <i class="fun-tag">创意创意1</i>
          <i class="fun-tag">创意2</i>
          <i class="fun-tag">创意3</i>
        </span>
      </p>
    </div>
    <div class="item_body">
      <video src="../../../static/test1.mp4" controls="controls" v-if="itemtype=='production'"></video>
      <router-link to="/lessonDetail" v-if="itemtype=='lesson'">
        <img src="../../../static/img/test.jpg">
      </router-link>
    </div>
    <div class="item_footer">
      <div class="message">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
        <span>888</span>
      </div>
      <div class="meun">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wujiaoxing_kong"></use>
          </svg>
          <span>888</span>
        </div>
        <div>
          <svg class="icon like" aria-hidden="true">
            <use xlink:href="#icon-z-like"></use>
          </svg>
          <span>888</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemList",
  props: {
    itemtype: String
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
        justify-content: space-between;
        .lesson_title {
          font-size: 0.5rem;
          color: #3789ff;
          font-weight: 600;
        }
        .labels {
          .fun-tag {
            margin-right: 0.4rem !important;
            color: #f9fdfe;
            &:nth-of-type(1) {
              .global-fun-tag(0.7rem, #86bbe1);
            }
            &:nth-of-type(2) {
              .global-fun-tag(0.7rem, #98dd80);
            }
            &:nth-of-type(3) {
              .global-fun-tag(0.7rem, #efa096);
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
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
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