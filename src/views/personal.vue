<template>
  <div class="personal_contnet">
    <tips title="个人中心" :isActive="true"></tips>
    <div class="person_info">
      <img :src="userInfo.avatar || img">
      <div class="person_message">
        <p>
          <span>{{userInfo.realName}}</span>
          <i>{{userInfo.schoolName}} {{userInfo.className}}</i>
        </p>
        <p>{{userInfo.signatrue}}</p>
      </div>
    </div>
    <div class="person_list">
      <ul>
        <li>
          <router-link to="/myProduction">
            <p>我发布的视频</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </router-link>
        </li>
        <li>
          <router-link to="/myLesson">
            <p>我发布的课程</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </router-link>
        </li>
        <li>
          <router-link to="/myCollection">
            <p>我的收藏</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </router-link>
        </li>
        <li>
          <router-link to="/myFllow">
            <p>我的关注</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </router-link>
        </li>
        <li>
          <router-link to="/myFan">
            <p>我的粉丝</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </router-link>
        </li>
        <li>
          <router-link to="/myMessage">
            <p>我的消息</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </router-link>
        </li>
        <li>
          <router-link to="/mySetting">
            <p>我的设置</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import tips from "../components/tips";
import { fetchUserInfo } from "@/api/index";
export default {
  name: "personal",
  components: {
    tips
  },
  data() {
    return {
      userInfo: {},
      img: "../../static/img/icon_touxiang02.png"
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
      this.userInfo = res.data.data;
    }
  }
};
</script>

<style lang='less' scoped>
.personal_contnet {
  position: relative;
  top: 1.5rem;
  margin-bottom: 2rem;
  z-index: 999999;
  .person_info {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 0.1rem solid #ffffff;
      margin-right: 0.2rem;
    }
    .person_message {
      color: #ffffff;
      font-size: 0.4rem;
      p {
        text-align: left;
        overflow: hidden;
        span {
          font-size: 0.45rem;
          font-weight: 600;
        }
      }
    }
  }
  .person_list {
    margin: 0 0.3rem;
    box-shadow: #c5dcff 0 1px 5px 1px;
    border-radius: 0.2rem;
    background: #fff;
    ul {
      padding-left: 0.5rem;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 2px solid blue;
        padding: 3px 0;
        a {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        i {
          width: 1rem;
          height: 1rem;
          text-align: center;
          line-height: 1rem;
          font-size: 0.5rem;
          color: #000;
        }
        p {
          font-size: 0.5rem;
          font-weight: 600;
          color: #000;
          &::before {
            display: inline-block;
            content: "";
            width: 1.5rem;
            height: 1.5rem;
            vertical-align: middle;
            margin-right: 0.2rem;
          }
        }
        &:nth-of-type(1) {
          p {
            &::before {
              background: url("../../static/img/icon_shipin001.png") no-repeat
                center/100%;
            }
          }
        }
        &:nth-of-type(2) {
          p {
            &::before {
              background: url("../../static/img/icon_kecheng002.png") no-repeat
                center/100%;
            }
          }
        }
        &:nth-of-type(3) {
          p {
            &::before {
              background: url("../../static/img/icon_shoucang003.png") no-repeat
                center/100%;
            }
          }
        }
        &:nth-of-type(4) {
          p {
            &::before {
              background: url("../../static/img/icon_guanzhu004.png") no-repeat
                center/100%;
            }
          }
        }
        &:nth-of-type(5) {
          p {
            &::before {
              background: url("../../static/img/icon_fensi005.png") no-repeat
                center/100%;
            }
          }
        }
        &:nth-of-type(6) {
          p {
            &::before {
              background: url("../../static/img/icon_xiaoxi006.png") no-repeat
                center/100%;
            }
          }
        }
        &:nth-of-type(7) {
          p {
            &::before {
              background: url("../../static/img/icon_shezhi007.png") no-repeat
                center/100%;
            }
          }
        }
      }
    }
  }
}
</style>