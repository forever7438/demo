<template>
  <div>
    <button :class="{'remove_concerns':isTab}" @click="tabShow">{{message}}</button>
  </div>
</template>

<script>
export default {
  name: "fllowBtn",
  data() {
    return {
      isTrue: true,
      isTab: false,
      message: "关注"
    };
  },
  methods: {
    tabShow() {
      if (this.isTrue) {
        this.isTrue = false;
        this.isTab = true;
        this.message = "取消关注";
        this.$toast.success("关注");
      } else {
        this.isTrue = true;
        this.isTab = false;
        this.message = "关注";
        this.$toast.success("取消关注");
      }
    }
  }
};
</script>

<style lang='less' scoped>
button {
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
.remove_concerns {
  &::before {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    content: "";
    background: url("../../static/img/icon_guanzhu02.png") no-repeat center/100% !important;
    vertical-align: sub;
    margin-right: 5px;
  }
}
</style>