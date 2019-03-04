<template>
  <div class="sign_content">
    <i class="sign_title">个性签名</i>
    <span v-if="autograph">{{autograph}}</span>
    <span v-else>该用户很懒,什么都没有留下！！！</span>
    <router-link to="/updateSign" tag="i" class="arrow">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jiantou1"></use>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "sign",
  props: {
    autograph: String
  }
};
</script>

<style lang="less" scoped>
.sign_content {
  display: flex;
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.2rem 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  color: #595958;
  font-size: 0.5rem;
  font-weight: 600;
  .sign_title {
    flex: 3;
    text-align: left;
  }
  span {
    flex: 6;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .arrow {
    flex: 1;
    text-align: right;
  }
}
</style>