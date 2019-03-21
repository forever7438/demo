<template>
  <div class="search_list">
    <ul>
      <li v-for="(item,index) in searchList" :key="index">
        <img :src="item.coverImage">
        <div class="search_info">
          <!-- <h4>{{item.creationName}}</h4> -->
          <router-link
            tag="h4"
            :to="{path:'/productionDetail',query:{creationId:item.creationId}}"
          >{{item.creationName}}</router-link>
          <p class="labels">
            <i class="fun-tag" v-for="(item,index) in item.labels" :key="index">{{item.labelName}}</i>
          </p>
          <p class="operation_list">
            <span>{{item.likeCount}}</span>
            <span>{{item.collectCount}}</span>
            <span>{{item.commentCount}}</span>
          </p>
          <div class="user_info">
            <img :src="item.avatar || userImg">
            <p>
              <span>{{item.realName}}</span>
              <br>
              <span>{{item.className}}{{item.schoolName}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "searchList",
  props: {
    searchList: Array
  },
  data() {
    return {
      userImg: "../../../static/img/icon_touxiang02.png"
    };
  }
};
</script>

<style lang='less' scoped>
@import "../../../static/less/global.less";
.search_list {
  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;
      &:last-child {
        margin-bottom: 0;
      }
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.2rem;
        margin-right: 0.3rem;
      }
      .search_info {
        .labels {
          margin: 0.1rem 0;
          font-size: 0.4rem;
          .fun-tag {
            margin-right: 0.9rem !important;
            color: #f9fdfe;
            &:nth-of-type(1) {
              .global-fun-tag(0.6rem, #86bbe1);
            }
            &:nth-of-type(2) {
              .global-fun-tag(0.6rem, #98dd80);
            }
            &:nth-of-type(3) {
              .global-fun-tag(0.6rem, #efa096);
            }
          }
        }
        .user_info {
          display: flex;
          align-items: center;
          img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
          }
          p {
            span {
              font-size: 0.4rem;
              &:nth-of-type(1) {
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
  .operation_list {
    display: flex;
    span {
      flex: 1;
      font-size: 0.4rem;
      &::before {
        display: inline-block;
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        vertical-align: sub;
      }
      &:nth-of-type(1) {
        &::before {
          background: url("../../../static/img/icon_dianzan01.png") no-repeat
            center/100%;
        }
      }
      &:nth-of-type(2) {
        &::before {
          background: url("../../../static/img/icon_shoucang01.png") no-repeat
            center/100%;
        }
      }
      &:nth-of-type(3) {
        &::before {
          background: url("../../../static/img/icon-pinglun01.png") no-repeat
            center/100%;
        }
      }
    }
  }
}
</style>