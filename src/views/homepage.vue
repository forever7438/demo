<template>
  <div class="homepage_content">
    <tips title="TA的主页"></tips>
    <div class="homepage_message">
      <div class="homepage_head">
        <p>
          <span>关注数</span>
          <span>
            <i class="fllow_number">{{userInfo.viewedTimes}}</i>人
          </span>
        </p>
        <img :src="userInfo.avatar || img">
        <p>
          <span>粉丝数</span>
          <span>
            <i class="fan_number">{{userInfo.likeCount}}</i>人
          </span>
        </p>
      </div>
      <div class="homepage_body">
        <p>
          <span class="homepage_name">{{userInfo.realName}}</span>
          <span>{{userInfo.schoolName}} {{userInfo.className}}</span>
        </p>
        <fllowBtn :isFollowed="userInfo.isFollowed" @refreshUserInfo="getUserInfo"></fllowBtn>
        <p v-if="userInfo.signatrue">{{userInfo.signatrue}}</p>
        <p v-else>这个人很懒，什么都没留下！~</p>
      </div>
    </div>
    <homepageList title="TA发布的视频" :list="creationList"></homepageList>
    <homepageList title="TA发布的课程" :list="lessonList"></homepageList>
  </div>
</template>

<script>
import tips from "../components/tips";
import fllowBtn from "../components/fllowBtn";
import homepageList from "../components/itemList/homepageList";
import { fetchUserInfo, creationOfUser, lessonOfUser } from "@/api/index";
export default {
  name: "homepage",
  components: {
    tips,
    fllowBtn,
    homepageList
  },
  data() {
    return {
      userInfo: {},
      creationList: [],
      lessonList: [],
      img: "../../static/img/icon_touxiang02.png"
    };
  },
  created() {
    this.getUserInfo();
    this.getUserCreationList();
    this.getUserLessonList();
  },
  methods: {
    //获取个人信息
    async getUserInfo() {
      let res = await fetchUserInfo({
        userId: this.$route.query.userId
      });
      this.userInfo = res.data.data;
    },

    //获取个人发布的视频
    async getUserCreationList() {
      let res = await creationOfUser({
        userId: this.$route.query.userId,
        pageNum: 1,
        pageSize: 10
      });
      if (res.data.code === 200) {
        this.creationList = res.data.data.creationList;
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },

    //获取个人发布的课程
    async getUserLessonList() {
      let res = await lessonOfUser({
        userId: this.$route.query.userId,
        pageNum: 1,
        pageSize: 10
      });
      if (res.data.code === 200) {
        this.lessonList = res.data.data.lessonnList;
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
.homepage_content {
  position: relative;
  top: 1.5rem;
  //   margin-bottom: 2rem;
  z-index: 999999;
  .homepage_message {
    margin: 0 0.3rem 0.3rem 0.3rem;
    padding: 0.05rem;
    box-shadow: #c5dcff 0 1px 5px 1px;
    border-radius: 0.2rem;
    background: #ffffff;
    .homepage_head {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.5rem;
      font-weight: 600;
      img {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0 0.5rem;
        border-radius: 50%;
        border: 0.05rem solid #358dfd;
      }
      p {
        display: flex;
        flex-direction: column;
        .fllow_number {
          color: #f2b016;
        }
        .fan_number {
          color: #44c80d;
        }
      }
    }
    .homepage_body {
      font-size: 0.45rem;
      font-weight: 600;
      p {
        .homepage_name {
          font-size: 0.5rem;
          font-weight: 600;
          color: #3688ff;
        }
        &:nth-of-type(2) {
          margin: 0 0.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>