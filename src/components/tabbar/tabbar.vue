<template>
  <div v-if="isShow">
    <ul class="tabbar">
      <li @click="checkBar('production')">
        <router-link to="/production">
          <img
            v-if="barName=='production'"
            class="coverImage"
            src="../../../static/img/icon_shipin04.png"
          >
          <img v-else src="../../../static/img/icon_shipin02.png">
          <!-- <p>创客视频</p> -->
        </router-link>
      </li>
      <li @click="checkBar('lesson')">
        <router-link to="/lesson">
          <img
            v-if="barName=='lesson'"
            class="coverImage"
            src="../../../static/img/icon_kecheng04.png"
          >
          <img v-else src="../../../static/img/icon_kecheng02.png">
          <!-- <p>创客课程</p> -->
        </router-link>
      </li>
      <li @click="checkBar('personal')">
        <router-link to="/personal">
          <img
            v-if="barName=='personal'"
            class="coverImage"
            src="../../../static/img/icon_wode04.png"
          >
          <img v-else src="../../../static/img/icon_wode02.png">
          <!-- <p>个人中心</p> -->
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      active: 0,
      isShow: true,
      barName: "production"
    };
  },
  created() {
    if (this.$route.name == "login") {
      this.isShow = false;
    }
  },
  methods: {
    checkBar(val) {
      this.barName = val;
    }
  }
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 2rem;
  position: fixed;
  z-index: 999999999999999;
  left: 0;
  bottom: 0;

  .tabbar {
    width: 100%;
    height: 100%;
    background: url("../../../static/img/bj_002.png") no-repeat center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0 0;

    li {
      flex: 1;

      img {
        width: 2rem;
        height: 2rem;
      }

      .coverImage {
        width: 2.7rem;
        height: 2.1rem;
      }
    }
  }
}
</style>
