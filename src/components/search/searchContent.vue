<template>
  <div class="labels_content">
    <div class="category">
      <h3>类别：</h3>
      <label-list :categoryList="categoryList"></label-list>
    </div>
    <div class="label">
      <h3>标签：</h3>
      <label-list></label-list>
    </div>
  </div>
</template>

<script>
import labelList from "../itemList/labelList";
import { getCategorys } from "@/api/index";
export default {
  name: "searchContent",
  components: {
    labelList
  },
  data() {
    return {
      categoryList: []
    };
  },
  created() {
    this.getCategoryList();
  },
  methods: {
    //获取分类
    async getCategoryList() {
      let res = await getCategorys();
      if (res.data.code === 200) {
        this.categoryList = res.data.data.categoryList;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.labels_content {
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.05rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  text-align: left;
  font-size: 0.45rem;
  .category {
    h3 {
      display: flex;
      align-items: center;
      margin: 0.1rem 0 0 0.1rem;
      &::before {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.1rem;
        content: "";
        background: url("../../../static/img/icon_leibie01.png") no-repeat
          center/100%;
      }
    }
  }
  .label {
    h3 {
      display: flex;
      align-items: center;
      margin: 0.1rem 0 0 0.1rem;
      &::before {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.1rem;
        content: "";
        background: url("../../../static/img/icon_biaoqian01.png") no-repeat
          center/100%;
      }
    }
  }
}
</style>