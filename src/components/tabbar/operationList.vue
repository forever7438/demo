<template>
  <div class="operation_list_content">
    <div class="tabbar_play" v-if="['lessonPlay','commentView'].includes($route.name)">
      <img :src="userImage">
      <input type="text" v-model="content">
      <button @click="handle(pathType)">发送</button>
    </div>
  </div>
</template>

<script>
import { comment } from "@/api/index";
export default {
  name: "operationList",
  data() {
    return {
      content: null,
      userImage: null
    };
  },
  props: {
    pathType: String
  },
  created() {
    if (sessionStorage.getItem("userImage")) {
      this.userImage = sessionStorage.getItem("userImage");
    } else {
      this.userImage = "../../../static/img/icon_touxiang02.png";
    }
  },
  methods: {
    //提交评论内容
    async handle(pathType) {
      if (!this.content) {
        this.$toast.fail({
          mask: true,
          message: "内容不得为空"
        });
        return;
      }
      this.$store.commit("SET_STATE");
      let res = await comment({
        type: pathType,
        content: this.content,
        targetId: this.$route.query.sectionId || this.$route.query.lessonId
      });
      if (res.data.code === 200) {
        this.$parent.getCommentsList(1);
        this.$store.commit("CLEAR_STATE");
        this.content = null;
        this.$toast.success({
          mask: true,
          message: "评论成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
      this.$store.commit("CLEAR_TEXT");
    }
  }
};
</script>

<style lang='less' scoped>
.operation_list_content {
  width: 100%;
  height: 1.8rem;
  position: fixed;
  z-index: 999999999;
  left: 0;
  bottom: 0;
  .tabbar_play {
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0 0;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1/37.5rem solid #358dfd;
      margin-left: 5/37.5rem;
    }
    input {
      width: 7rem;
      height: 1rem;
      border-radius: 0.4rem;
      border: 1px solid #ddd;
      margin: 0 8/37.5rem;
      font-size: 0.4rem;
      font-weight: 600;
      padding-left: 0.2rem;
    }
    button {
      height: 0.9rem;
      color: #fff;
      font-size: 0.4rem;
      padding: 0 0.2rem;
      border: 0.03rem solid #472fe0;
      border-radius: 0.2rem;
      background: -webkit-linear-gradient(left, #3e40e2, #4413b8);
      background: -o-linear-gradient(right, #3e40e2, #4413b8);
      background: -moz-linear-gradient(right, #3e40e2, #4413b8);
      background: linear-gradient(to right, #3e40e2, #4413b8);
    }
  }
}
</style>