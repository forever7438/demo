<template>
  <div class="item_contnet">
    <img src="../../../static/img/test.jpg">
    <div class="item_message">
      <span>小火车</span>
      <span>2018-09-11</span>
    </div>
    <div class="operation_list">
      <span>888</span>
      <span>1888</span>
      <span>2888</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentItem"
};
</script>

<style lang='less' scoped>
.item_contnet {
  width: 4.5rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  img {
    width: 100%;
    height: 3rem;
    border-radius: 0.2rem 0.2rem 0 0;
  }
  .item_message {
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    font-size: 0.4rem;
  }
  .operation_list {
    display: flex;
    span {
      flex: 1;
      font-size: 0.4rem;
      &:nth-of-type(1) {
        &::before {
          display: inline-block;
          width: 0.5rem;
          height: 0.5rem;
          background: url("../../../static/img/icon-pinglun01.png") no-repeat
            center/100%;
        }
      }
    }
  }
}
</style>