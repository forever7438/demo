<template>
  <div class="header_shade">
    <span :class="['header_back']" @click="goback">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui-copy"></use>
      </svg>
    </span>
    <span class="header_title">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "loginHeader",
  props: {
    title: String
  },
  methods: {
    goback() {
      window.history.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
.header_shade {
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 9999999;
  padding-top: 0.2rem;
  align-items: center;
  .header_back {
    position: absolute;
    padding: 10px;
    svg {
      font-size: 0.6rem;
      color: #ffffff;
    }
  }
  .header_title {
    flex: 9;
    height: 1rem;
    color: #ffffff;
    font-size: 0.6rem;
    font-weight: 600;
  }
}
</style>