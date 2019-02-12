<template>
  <div class="update_phone_content">
    <ul>
      <li>
        <div>
          <i>手机号码</i>
          <span>15872406760</span>
        </div>
        <span class="btn" @click="sendErrorBtn">解绑</span>
      </li>
      <li>
        <i>修改密码</i>
        <router-link to="/forgetPassword" tag="span">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou1"></use>
          </svg>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "updatePhone",
  methods: {
    sendErrorBtn() {
      this.$emit("Untying");
    }
  }
};
</script>

<style lang="less" scoped>
.update_phone_content {
  display: flex;
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.2rem 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  color: #595958;
  font-size: 0.5rem;
  font-weight: 600;
  ul {
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // padding-bottom: 0.2rem;
      span {
        padding: 0.1rem;
      }
      &:nth-of-type(1) {
        padding-bottom: 0.2rem;
        border-bottom: 0.03rem solid #dddddd;
        i {
          margin-right: 0.8rem;
        }
        .btn {
          color: #fff;
          font-size: 0.4rem;
          padding: 0 0.2rem;
          border: 0.03rem solid #472fe0;
          border-radius: 0.2rem;
          background: -webkit-linear-gradient(left, #3e40e2, #4413b8);
          /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(
            right,
            #3e40e2,
            #4413b8
          ); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(right, #3e40e2, #4413b8);
          /* Firefox 3.6 - 15 */
          background: linear-gradient(to right, #3e40e2, #4413b8);
        }
      }
      &:nth-of-type(2) {
        margin-top: 0.2rem;
      }
    }
  }
}
</style>