<template>
  <div id="app">
    <web-header></web-header>
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <navigator></navigator>
  </div>
</template>

<script>
import Navigator from "./components/tabbar/tabbar";
import webHeader from "./components/header/header";
export default {
  name: "App",
  components: {
    Navigator,
    webHeader
  }
};
</script>

<style>
#app {
  font-family: Helvetica Neue, Helvetica, Roboto, Segoe UI, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 路由切换过度效果 */
/* .slide-enter{
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  transition: all 0.5s ease-in-out;
}
.slide-leave-active{
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  transition: all 0.5s ease-in-out;
} */
</style>
