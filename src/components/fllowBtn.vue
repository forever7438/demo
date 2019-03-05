<template>
  <div>
    <button
      :class="{'remove_concerns':isFollowed}"
      @click="tabShow(userId)"
    >{{isFollowed?'取消关注':'关注'}}</button>
  </div>
</template>

<script>
import { follow, cancelFollow } from "@/api/index";
export default {
  name: "fllowBtn",
  props: {
    isFollowed: Boolean,
    userId: String
  },
  data() {
    return {};
  },
  methods: {
    tabShow(userId) {
      if (this.isFollowed) {
        this.cancelFollow(userId);
      } else {
        this.follow(userId);
      }
    },
    //关注
    async follow(userId) {
      let res = await follow({
        userId: userId || this.$route.query.userId
      });
      if (res.data.code === 200) {
        this.$emit("refreshUserInfo");
        this.$toast.success({
          mask: true,
          message: "关注成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },
    //取消关注
    async cancelFollow(userId) {
      let res = await cancelFollow({
        userId: userId || this.$route.query.userId
      });
      if (res.data.code === 200) {
        this.$emit("refreshUserInfo");
        this.$toast.success({
          mask: true,
          message: "取消成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    }
  }
};
</script>

<style lang='less' scoped>
button {
  height: 1rem;
  border: 1px solid #13c211;
  border-radius: 5px;
  background: #ffffff;
  font-size: 0.5rem;
  font-weight: 600;
  &::before {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    content: "";
    background: url("../../static/img/icon_guanzhu01.png") no-repeat center/100%;
    vertical-align: sub;
    margin-right: 5px;
  }
}
.remove_concerns {
  &::before {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    content: "";
    background: url("../../static/img/icon_guanzhu02.png") no-repeat center/100% !important;
    vertical-align: sub;
    margin-right: 5px;
  }
}
</style>