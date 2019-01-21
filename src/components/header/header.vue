<template>
<div v-if="isShow">
  <div class="header_content">
        <span class="header_back" @click="goback">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanhui-copy"></use>
            </svg>
        </span>
        <span class="header_title">测试</span>
  </div>
  <div class="header_shade">

  </div>
</div>
    
</template>

<script>
export default {
  name: "webHeader",
  data() {
    return {
      isShow: true
    };
  },
  created() {
    if (this.$route.name == "login") {
      this.isShow = false;
    }
  },
  methods: {
    goback() {
      window.history.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.header_content {
  width: 100%;
  height: 1.5rem;
  background: purple;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999999999;
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
    color: #ffffff;
    font-size: 0.6rem;
    font-weight: 600;
  }
}
.header_shade {
  background: purple;
  width: 100%;
  height: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  position: fixed;
  top: 55/37.5rem;
}
</style>