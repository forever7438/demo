<template>
  <div class="homepage_list">
    <div class="homepage_title">
      <span>{{title}}</span>
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou1"></use>
        </svg>
      </i>
    </div>
    <div class="production_list">
      <contentItem v-for="(item,index) in 4" :key="index"></contentItem>
    </div>
  </div>
</template>

<script>
import contentItem from "./contentItem";
export default {
  name: "homepageList",
  components: {
    contentItem
  },
  props: {
    title: String
  }
};
</script>

<style lang='less' scoped>
.homepage_list {
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.05rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  .homepage_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0;
    font-size: 0.5rem;
    font-weight: 600;
    span {
      margin-left: 0.2rem;
      padding-left: 0.2rem;
      color: #5e20e6;
      border-left: 0.1rem solid #5e20e6;
    }
  }
  .production_list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>