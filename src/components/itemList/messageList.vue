<template>
  <div class="message_item">
    <div>
      <div class="message_type">
        <img :src="iconImage">
        <span>系统通知</span>
      </div>
      <div class="message_detail">
        <span>
          <i>最新一期的创客小明星出炉啦！快去看看吧！~</i>
          <i>2018-06-12&nbsp;&nbsp;&nbsp;15:31:23</i>
          <i class="dot"></i>
        </span>
      </div>
    </div>
    <span class="del_btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shanchu-copy"></use>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "messageList",
  data() {
    return {
      iconImage: require("../../../static/img/icon_xitong_01.png")
    };
  }
};
</script>

<style lang='less' scoped>
.message_item {
  display: flex;
  padding: 0.2rem;
  color: #646464;
  div {
    .message_type {
      text-align: left;
      font-size: 0.4rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        vertical-align: sub;
      }
      span {
        font-weight: 600;
      }
    }
    .message_detail {
      text-align: left;
      font-size: 0.4rem;
      span {
        position: relative;
        i {
          &:nth-of-type(1) {
            display: block;
            width: 8rem;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:nth-of-type(2) {
            font-size: 0.4rem;
            font-weight: 600;
          }
        }
        .dot {
          display: block;
          width: 0.12rem;
          height: 0.15rem;
          border-radius: 50%;
          background: red;
          position: absolute;
          top: -0.8rem;
          right: -3.8rem;
        }
      }
    }
  }
  .del_btn {
    width: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
  }
}
</style>