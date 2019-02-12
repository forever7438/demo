<template>
  <div class="header_shade">
    <span :class="['header_back',{'isActive':isActive}]" @click="goback">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui-copy"></use>
      </svg>
    </span>
    <span class="header_title">{{title}}</span>
    <span class="header_bth" v-if="showBtn" @click="sendSure">完成</span>
  </div>
</template>

<script>
export default {
  name: "tips",
  props: {
    title: String,
    isActive: {
      type: Boolean,
      required: false
    },
    showBtn: Boolean
  },
  methods: {
    goback() {
      window.history.go(-1);
    },
    sendSure() {
      this.$emit("showBtn");
    }
  }
};
</script>

<style lang='less' scoped>
.header_shade {
  width: 100%;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 9999999;
  top: 0rem;
  background: url("../../static/img/bj-005.png") no-repeat center/100%;
  .header_back {
    position: absolute;
    left: 0;
    padding: 5px;
    svg {
      font-size: 0.6rem;
      color: #ffffff;
    }
  }
  .header_title {
    flex: 9;
    line-height: 1rem;
    color: #ffffff;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .header_bth {
    position: absolute;
    right: 0;
    line-height: 1rem;
    color: #ffffff;
    font-size: 0.6rem;
    font-weight: 600;
    margin-right: 0.3rem;
  }
}
</style>