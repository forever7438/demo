<template>
  <div class="search_content">
    <s class="icon_search"></s>
    <input type="text" placeholder="请输入关键字或标签" :disabled="isDisabled">
    <span v-if="!isDisabled" class="icon_btn">确定</span>
  </div>
</template>

<script>
export default {
  name: "searchHeader",
  props: {
    isDisabled: Boolean
  }
};
</script>

<style lang='less' scoped>
.search_content {
  position: relative;
  margin: 0 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  margin-bottom: 0.3rem;
  background: #ffffff;
  padding: 0.1rem;
  .icon_search {
    position: absolute;
    top: 0.15rem;
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    background: url("../../../static/img/icon_soushuo01.png") no-repeat
      center/100%;
  }
  input {
    width: 100%;
    height: 0.8rem;
    font-size: 0.5rem;
    font-weight: 600;
    border: none;
    padding-left: 0.8rem;
  }
  .icon_btn {
    z-index: 999999;
    position: absolute;
    width: 1rem;
    line-height: 0.6rem;
    right: 0.2rem;
    top: 0.2rem;
    border-radius: 0.1rem;
    color: #523ae7;
    padding: 0.01rem 0.02rem;
    font-size: 0.45rem;
    font-weight: 600;
    border: 0.03rem solid #523ae7;
  }
}
</style>