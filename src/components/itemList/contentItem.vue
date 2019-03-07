<template>
  <div class="item_contnet">
    <img :src="item.coverImage || img">
    <div class="item_message">
      <router-link
        tag="span"
        :to="{path:'/lessonDetail',query:{lessonId:item.lessonId}}"
        v-if="genre=='lesson'"
      >{{item.lessonName || item.creationName}}</router-link>
      <router-link
        tag="span"
        :to="{path:'/productionDetail',query:{creationId:item.creationId}}"
        v-else
      >{{item.lessonName || item.creationName}}</router-link>
      <span>{{item.uploadTime | dateformat('YYYY-MM-DD')}}</span>
    </div>
    <div class="operation_list">
      <span>{{item.viewTimes}}</span>
      <span>{{item.viewTimes}}</span>
      <span>{{item.likeCount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentItem",
  props: {
    item: Object,
    genre: String
  },
  data() {
    return {
      img: "../../../static/img/icon_touxiang02.png"
    };
  }
};
</script>

<style lang='less' scoped>
.item_contnet {
  width: 4.6rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  margin-bottom: 0.3rem;
  background: #ffffff;
  img {
    width: 100%;
    height: 3rem;
    border-radius: 0.2rem 0.2rem 0 0;
  }
  .item_message {
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    font-size: 0.4rem;
    span {
      &:nth-of-type(1) {
        width: 2rem;
        text-align: left;
        font-size: 0.45rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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