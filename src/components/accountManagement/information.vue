<template>
  <div class="information_content">
    <ul>
      <li>
        <i>姓名</i>
        <span>路飞</span>
      </li>
      <li>
        <i>学校</i>
        <span>神龙小学</span>
      </li>
      <li>
        <i>班级</i>
        <span>一年级一班</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "information"
};
</script>

<style lang="less" scoped>
.information_content {
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.2rem 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  color: #595958;
  ul {
    li {
      display: flex;
      align-items: center;
      margin: 0.2rem auto;
      padding-bottom: 0.2rem;
      border-bottom: 0.03rem solid #dddddd;
      font-size: 0.5rem;
      font-weight: 600;
      i {
        margin-right: 0.8rem;
      }
      &:nth-of-type(3) {
        border-bottom: 0;
        padding-bottom: 0;
      }
    }
  }
}
</style>