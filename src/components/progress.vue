<template>
  <div class="progress_content" v-if="isShow">
    <van-circle
      v-model="currentRate"
      color="#07c160"
      fill="#fff"
      size="3.2rem"
      layer-color="#ebedf0"
      :text="text"
      :rate="complete"
      :speed="100"
      :stroke-width="60"
    />
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: {
    complete: Number,
    isShow: Boolean
  },
  data() {
    return {
      currentRate: 0
    };
  },
  computed: {
    text() {
      return `${this.currentRate.toFixed(0)}%`;
    }
  }
};
</script>

<style lang='less' scoped>
.progress_content {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999 !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>