<template>
  <div class="head_portrait_content">
    <span>头像</span>
    <img src="../../../static/img/lf.jpg">
  </div>
</template>

<script>
export default {
  name: "headPortrait"
};
</script>

<style lang="less" scoped>
.head_portrait_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.3rem 0.5rem 0.3rem 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  color: #595958;
  span {
    font-size: 0.5rem;
    font-weight: 600;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 0.05rem solid #358dfd;
  }
}
</style>