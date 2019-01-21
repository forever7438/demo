<template>
    <div v-if="isShow">
       <ul class="tabbar">
           <li>
               <img src="../../../static/img/icon_zhuye01.png">
               <p>创客视频</p>
           </li>
           <li>
               <img src="../../../static/img/icon_zuopin01.png">
               <p>创客课程</p>
           </li>
           <li>
               <img src="../../../static/img/icon_kecheng01.png">
               <p>个人中心</p>
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
      isShow: true
    };
  },
  created() {
    if (this.$route.name == "login") {
      this.isShow = false;
    }
  }
};
</script>
<style lang='less' scoped>
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
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0 0;
    li {
      flex: 1;
      img {
        width: 1rem;
        height: 1rem;
      }
      p {
        margin-top: 5px;
        font-size: 0.4rem;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        color: #ffffff;
      }
    }
  }
}
</style>