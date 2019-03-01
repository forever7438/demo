<template>
  <div class="fan_item_contnet">
    <div class="item_meun">
      <img v-if="item.avatar" :src="item.avatar">
      <img v-else src="../../../static/img/icon_touxiang01.png">
    </div>
    <div class="item_message">
      <p>{{item.realName}}</p>
      <p>{{item.schoolName}}&nbsp;&nbsp;{{item.className}}</p>
      <p v-if="item.signatrue">{{item.signatrue}}</p>
      <p v-else>这家伙很懒,什么都没有留下！！！</p>
    </div>
    <div class="item_motto">
      <fllowBtn></fllowBtn>
    </div>
  </div>
</template>

<script>
import fllowBtn from "../fllowBtn";
export default {
  name: "fanItem",
  components: {
    fllowBtn
  },
  props: {
    item: Object
  }
};
</script>

<style lang='less' scoped>
.fan_item_contnet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.3rem 0.3rem;
  padding: 5px;
  border-bottom: 1px solid #dddddd;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #fff;
  .item_meun {
    img {
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      border: 0.03rem solid #358dfd;
      margin-right: 5px;
    }
  }
  .item_message {
    font-size: 0.4rem;
    text-align: left;
    p {
      &:nth-of-type(1) {
        color: #358dfd;
        font-size: 0.45rem;
        font-weight: 600;
      }
      &:nth-of-type(2) {
        font-size: 0.4rem;
      }
      &:nth-of-type(3) {
        width: 3.5rem;
        font-size: 0.45rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>