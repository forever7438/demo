<template>
  <div id="app">
    <web-header></web-header>
    <router-view/>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
