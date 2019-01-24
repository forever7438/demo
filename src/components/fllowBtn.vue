<template>
  <div>
    <button>关注</button>
  </div>
</template>

<script>
export default {
  name: "fllowBtn"
};
</script>

<style lang='less' scoped>
button {
  width: 2.5rem;
  height: 1rem;
  border: 1px solid #13c211;
  border-radius: 5px;
  background: #ffffff;
  font-size: 0.5rem;
  font-weight: 600;
  &::before {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    content: "";
    background: url("../../static/img/icon_guanzhu01.png") no-repeat center/100%;
    vertical-align: sub;
    margin-right: 5px;
  }
}
</style>