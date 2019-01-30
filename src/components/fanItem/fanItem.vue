<template>
  <div class="fan_item_contnet">
    <div class="item_meun">
      <div>
        <img src="../../../static/img/icon_touxiang01.png">
        <span>
          <p>真实姓名</p>
          <p>神龙小学&nbsp;&nbsp;六年级一班</p>
        </span>
      </div>
      <fllowBtn></fllowBtn>
    </div>
    <div class="item_motto">
      榜样在前，路在脚下！！榜样在前，路在脚下！！榜样在前，路在脚下！！榜样在前，路在脚下！！
      榜样在前，路在脚下！！榜样在前，路在脚下！！榜样在前，路在脚下！！
    </div>
  </div>
</template>

<script>
import fllowBtn from "../fllowBtn";
export default {
  name: "fanItem",
  components: {
    fllowBtn
  }
};
</script>

<style lang='less' scoped>
.fan_item_contnet {
  margin: 0 0.3rem 0.3rem;
  padding: 5px;
  border-bottom: 1px solid #dddddd;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #fff;
  .item_meun {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      img {
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        border: 0.03rem solid #358dfd;
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
  .item_motto {
    font-size: 0.4rem;
    text-align: left;
  }
}
</style>