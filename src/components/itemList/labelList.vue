<template>
  <div class="label_content">
    <ul>
      <li :class="{isActive:isAll}" @click="checkAll">全部</li>
      <li
        v-for="(item,index) in categoryList"
        :key="index"
        @click="checkCategory(index)"
        :class="addClass(index)"
      >{{item.categoryName}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "labelList",
  props: {
    categoryList: Array
  },
  data() {
    return {
      checkId: [],
      isAll: true
    };
  },
  methods: {
    checkAll() {
      this.isAll = true;
      this.checkId = [];
    },
    checkCategory(index) {
      this.isAll = false;
      this.checkId = [];
      this.checkId.push(index);
      
    },
    addClass(index) {
      return this.checkId.indexOf(index) > -1 ? "isActive" : "";
    }
  }
};
</script>

<style lang='less' scoped>
.label_content {
  margin: 0 0.3rem 0 0.3rem;
  padding: 0.05rem;
  //   box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  text-align: left;
  font-size: 0.45rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0.05rem 0.3rem;
    font-size: 0.45rem;
    font-weight: 600;
    li {
      width: 1.7rem;
      padding: 0.1rem;
      margin-bottom: 0.1rem;
      margin-left: 0.1rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: #ddd;
      border-radius: 0.5rem;
    }
  }
}

.isActive {
  color: #5c46e7;
  background-color: #dad0f1 !important;
}
</style>