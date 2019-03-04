<template>
  <div class="sign_content">
    <textarea v-model="autograph" @change="saveSignText"></textarea>
  </div>
</template>

<script>
import { fetchUserInfo } from "@/api/index";
export default {
  name: "editSign",
  data() {
    return {
      autograph: null
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    //获取个人信息
    async getUserInfo() {
      let res = await fetchUserInfo({
        userId: sessionStorage.getItem("userId")
      });
      this.autograph = res.data.data.signatrue;
    },

    //获取用户输入的个性签名存储在vuex
    saveSignText() {
      this.$store.commit("SET_SIGN_TEXT", this.autograph);
    }
  }
};
</script>

<style lang="less" scoped>
.sign_content {
  display: flex;
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  color: #595958;

  textarea {
    width: 100%;
    height: calc(100vh - 4.5rem);
    border: none;
    font-size: 0.5rem;
    font-weight: 600;
  }
}
</style>
