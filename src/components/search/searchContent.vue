<template>
  <div class="labels_content">
    <div class="category" v-if="!isShow">
      <h3>类别：</h3>
      <label-list :categoryList="categoryList" itemtype="category"></label-list>
    </div>
    <div class="label" v-if="!isShow">
      <h3>标签：</h3>
      <label-list :labelList="labelList" itemtype="label"></label-list>
    </div>
    <search-list v-if="isShow" :searchList="successList"></search-list>
  </div>
</template>

<script>
import labelList from "../itemList/labelList";
import searchList from "../itemList/searchList";
import {
  getCategorys,
  getLabels,
  getAllLabels,
  filterCreations,
  searchCreations
} from "@/api/index";
export default {
  name: "searchContent",
  components: {
    labelList,
    searchList
  },
  data() {
    return {
      categoryList: [],
      labelList: [],
      successList: [],
      isShow: false
    };
  },
  created() {
    this.getCategoryList();
    this.getAllLabels();
  },
  methods: {
    //获取分类
    async getCategoryList() {
      let res = await getCategorys();
      if (res.data.code === 200) {
        this.categoryList = res.data.data.categoryList;
      }
    },
    //获取全部标签
    async getAllLabels() {
      let res = await getAllLabels();
      if (res.data.code === 200) {
        this.labelList = res.data.data.labelList;
      }
    },
    //获取标签
    async getLabelList(categoryId) {
      let res = await getLabels(categoryId);
      if (res.data.code === 200) {
        this.labelList = res.data.data.labelList;
      }
    },
    //通过标签搜索
    async filterCreation(id) {
      let res = await filterCreations({
        labelId: id,
        pageNum: 1,
        pageSize: 100,
        schoolId: null,
        sort: "time"
      });
      if (res.data.code === 200) {
        this.successList = res.data.data.creationList;
        if (this.successList.length) {
          this.isShow = true;
        } else {
          this.$toast({
            mask: true,
            message: "暂无信息"
          });
        }
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