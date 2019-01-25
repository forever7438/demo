<template>
  <div v-if="isShow">
    <ul class="tabbar_play" v-if="this.$route.name=='lessonPlay'">
      <li>
        <span>点赞 1888</span>
      </li>
      <li>
        <span>评论 888</span>
      </li>
      <li>
        <span>收藏 888</span>
      </li>
    </ul>
    <ul class="tabbar" v-else>
      <li>
        <router-link to="/production" tag="p" active-class="isProduction"></router-link>
      </li>
      <li>
        <router-link to="/lesson" tag="p" active-class="isLesson"></router-link>
      </li>
      <li>
        <router-link to="/personal" tag="p" active-class="isPersonal"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      active: 0,
      isShow: true
    };
  },
  created() {
    this.showBar(this.$route.name);
  },
  methods: {
    showBar(name) {
      const pathName = [
        "login",
        "quickLogin",
        "forgetPassword",
        "updatePassword",
        "myFan",
        "myFllow",
        "myCollection",
        "myLesson",
        "myProduction",
        "mySetting",
        "myMessage",
        "lessonDetail",
        "homepage",
        "accountManagement"
      ];
      if (pathName.includes(name)) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.showBar(to.name);
    }
  }
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 1.8rem;
  position: fixed;
  z-index: 999999999999999;
  left: 0;
  bottom: 0;

  .tabbar {
    width: 100%;
    height: 100%;
    background: url("../../../static/img/bj_002.png") no-repeat center/100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0 0;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      p {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
      }
      .isProduction {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
        background: url("../../../static/img/icon_shipin04.png") no-repeat
          center/100% !important;
      }
      .isLesson {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
        background: url("../../../static/img/icon_kecheng04.png") no-repeat
          center/100% !important;
      }
      .isPersonal {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
        background: url("../../../static/img/icon_wode04.png") no-repeat
          center/100% !important;
      }
      &:nth-of-type(1) {
        p {
          background: url("../../../static/img/icon_shipin03.png") no-repeat
            center/100%;
        }
      }
      &:nth-of-type(2) {
        p {
          background: url("../../../static/img/icon_kecheng03.png") no-repeat
            center/100%;
        }
      }
      &:nth-of-type(3) {
        p {
          background: url("../../../static/img/icon_wode03.png") no-repeat
            center/100%;
        }
      }
    }
  }
  .tabbar_play {
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid #ddd;
    border-radius: 0.5rem 0.5rem 0 0;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      span {
        font-size: 0.5rem;
        font-weight: 600;
      }
      &:nth-of-type(1) {
        border-right: 1px solid #dddddd;
        span {
          &::before {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
            content: "";
            background: url("../../../static/img/icon_dianzan01.png") no-repeat
              center/100%;
            vertical-align: sub;
          }
        }
      }
      &:nth-of-type(2) {
        border-right: 1px solid #dddddd;
        span {
          &::before {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
            content: "";
            background: url("../../../static/img/icon-pinglun01.png") no-repeat
              center/100%;
            vertical-align: sub;
          }
        }
      }
      &:nth-of-type(3) {
        span {
          &::before {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
            content: "";
            background: url("../../../static/img/icon_shoucang02.png") no-repeat
              center/100%;
            vertical-align: sub;
          }
        }
      }
    }
  }
}
</style>
