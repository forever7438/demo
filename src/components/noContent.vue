<template>
  <div class="no_content">
    <img src="../../static/img/bj_meiyoushuju.png">
    <p>暂无信息</p>
  </div>
</template>

<script>
export default {
  name: "noContent"
};
</script>

<style lang='less' scoped>
.no_content {
  padding-top: 3rem;
  img {
    width: 250/37.5rem;
    height: 200/37.5rem;
  }
  p {
    font-size: 0.5rem;
    font-weight: 600;
  }
}
</style>