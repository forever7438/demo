<template>
  <div class="lesson_content">
    <h3>课程章节</h3>
    <ul>
      <li v-for="(item,index) in lessonDesc" :key="index">
        <router-link :to="{path:'/lessonPlay',query:{sectionId:item.sectionId}}" tag="p">
          <span>{{item.sectionName}}</span>
          <i>{{item.videoLength}}</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import noContent from "../../components/noContent";
export default {
  name: "lessonDesc",
  components: {
    noContent
  },
  props: {
    lessonDesc: Array
  }
};
</script>

<style lang='less' scoped>
.lesson_content {
  margin: 0 0.3rem 0.3rem;
  padding-bottom: 5px;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #fff;
  padding-top: 0.1rem;
  font-size: 0.5rem;
  h3 {
    text-align: left;
    border-left: 0.1rem solid #5b1ce5;
    margin: 0.1rem 0 0 0.2rem;
    padding-left: 0.1rem;
    color: #5b1ce5;
    font-weight: 800;
  }
  ul {
    margin: 0 0.2rem;
    li {
      p {
        display: flex;
        justify-content: space-between;
        margin: 0.2rem 0;
        padding: 0.1rem;
        border-radius: 0.1rem;
        background-color: #e5e5e5;
        font-weight: 600;
        span {
          &::before {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            content: "";
            background: url("../../../static/img/icon_zanting01.png") no-repeat
              center/cover;
            vertical-align: middle;
            margin-right: 0.1rem;
            margin-bottom: 0.1rem;
          }
        }
      }
    }
  }
}
</style>