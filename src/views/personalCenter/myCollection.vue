<template>
  <div class="collection_content">
    <tips title="我的收藏"></tips>
    <div class="tab_list">
      <p class="isActive">收藏视频</p>
      <p>收藏课程</p>
    </div>
    <div class="collection_list">
      <contentItem v-for="(item,index) in 10" :key="index"></contentItem>
    </div>
  </div>
</template>

<script>
import tips from "../../components/tips";
import contentItem from "../../components/itemList/contentItem";
export default {
  name: "myCollection",
  components: {
    tips,
    contentItem
  },
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.collection_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
  .tab_list {
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0 0.5rem;
    margin: 0 0.3rem 0.3rem 0.3rem;
    box-shadow: #c5dcff 0 1px 5px 1px;
    border-radius: 0.2rem;
    background: #ffffff;
    p {
      font-size: 0.5rem;
      color: #595958;
      font-weight: 600;
      margin-right: 1rem;
    }
    .isActive {
      color: #8474ea;
      border-bottom: 4px solid #8474ea;
    }
  }
  .collection_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0.3rem 0.3rem 0.3rem;
  }
}
</style>