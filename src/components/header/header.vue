<template>
  <div v-if="isShow">
    <div class="header_content"></div>
    <div class="header_shade">
      <span :class="['header_back',{'isActive':isActive}]" @click="goback">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui-copy"></use>
        </svg>
      </span>
      <span class="header_title">{{headTitle}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "webHeader",
  data() {
    return {
      isShow: true,
      isActive: false,
      headTitle: "创客视频"
    };
  },
  created() {
    if (['login','forgetPassword','updatePasswprd'].includes(this.$route.name)) {
      this.isShow = false;
    }
  },
  methods: {
    goback() {
      window.history.go(-1);
    }
  },
  watch: {
    $route(to, from) {
      const pathName = to.name;
      switch (pathName) {
        case "production":
          this.headTitle = "创客视频";
          break;
        case "lesson":
          this.headTitle = "创客课程";
          break;
        case "personal":
          this.headTitle = "个人中心";
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.isActive {
  display: none;
}
.header_content {
  width: 100%;
  height: 3.5rem;
  background: url("../../../static/img/bj-001.png") no-repeat center/100%;
  position: fixed;
  box-sizing: border-box;
}
.header_shade {
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 9999999;
  padding-top: 0.2rem;
  background: url("../../../static/img/bj_002.png") no-repeat center/100%;
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