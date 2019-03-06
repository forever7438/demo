<template>
  <div class="commentItem_content">
    <h3>评论</h3>
    <ul>
      <li v-for="(item,index) in commentList" :key="index">
        <div class="comment_header">
          <img :src="item.commentAvatar || img">
          <span>{{item.commentUsername}}</span>
          <span>{{item.commentSchoolName}}&nbsp;&nbsp;{{item.commentClassName}}</span>
        </div>
        <div class="comment_body">
          <p>{{item.commentContent}}</p>
          <p>
            <span>{{item.commentTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
            <span>
              <i @click="showModel(item)">回复</i>
              <i
                :class="[{'isLike':!item.isLiked}]"
                @click="addLikeNum(item.commentId,item.isLiked)"
              >{{item.commentLikeCount}}</i>
            </span>
          </p>
        </div>
        <commentReply :replyList="item.replyList" :commentId="item.commentId"></commentReply>
        <div class="line"></div>
      </li>
    </ul>

    <!-- 回复模块 -->
    <dialogModel v-if="isShowModel">
      <dialogText></dialogText>
      <dialogBtn cancalText="取消" confirmText="确定" @cancal="isShowModel=false" @confirm="handle"></dialogBtn>
    </dialogModel>
  </div>
</template>

<script>
import commentReply from "./commentReply";
import dialogModel from "../dialog/dialogModel";
import dialogText from "../dialog/dialogText";
import dialogBtn from "../dialog/dialogBtn";
import { comment, commentsList, reply, like } from "@/api/index";
export default {
  name: "commentItem",
  components: {
    commentReply,
    dialogModel,
    dialogText,
    dialogBtn
  },
  props: {
    type: String,
    targetId: String,
    title: String
  },
  data() {
    return {
      isShowModel: false,
      commentList: {},
      replyMessage: null,
      img: "../../../static/img/icon_touxiang02.png"
    };
  },
  created() {
    this.getCommentsList(1);
  },
  computed: {
    state() {
      return this.$store.state.data.isChange;
    }
  },
  methods: {
    //获取评论列表
    async getCommentsList(pageNum) {
      let parmes = {
        pageNum: pageNum,
        pageSize: 100,
        targetId: this.targetId,
        type: this.type
      };
      let res = await commentsList(parmes);
      if (res.data.code === 200) {
        // 获取评论列表 - 成功
        this.commentList = res.data.data.commentList;
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    },

    showModel(obj) {
      this.isShowModel = true;
      this.replyMessage = obj;
    },
    //回复
    async handle() {
      if (!this.$store.state.data.text) {
        this.isShowModel = false;
        this.$toast.fail({
          mask: true,
          message: "请填写内容"
        });
        return;
      }
      let res = await reply({
        commentId: this.replyMessage.commentId,
        content: this.$store.state.data.text,
        atUserId: this.replyMessage.commentUserId
      });
      if (res.data.code === 200) {
        this.getCommentsList(1);
        this.$toast.success({
          mask: true,
          message: "回复成功"
        });
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
      this.isShowModel = false;
      this.$store.commit("CLEAR_TEXT");
    },
    //点赞
    async addLikeNum(id, isLiked) {
      if (isLiked) {
        return;
      }
      let parmes = {
        targetId: id,
        type: "comment"
      };
      let res = await like(parmes);
      if (res.data.code === 200) {
        this.getCommentsList(1);
      } else {
        this.$toast.fail({
          mask: true,
          message: res.data.message
        });
      }
    }
  },
  watch: {
    state(newd, old) {
      if (newd) {
        this.getCommentsList(1);
      }
    }
  }
};
</script>

<style lang='less' scoped>
.commentItem_content {
  margin: 0 0.3rem 0.3rem;
  padding-bottom: 5px;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #fff;
  h3 {
    text-align: left;
    border-left: 0.1rem solid #5b1ce5;
    margin: 0.1rem 0 0 0.2rem;
    padding-left: 0.1rem;
    color: #5b1ce5;
    font-weight: 800;
    font-size: 0.5rem;
  }
  ul {
    li {
      .comment_header {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 0.2rem;
        padding-bottom: 0;
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
        span {
          &:nth-of-type(1) {
            margin: 0 0.3rem 0 0.1rem;
            font-size: 0.5rem;
            font-weight: 600;
            color: #4791ee;
          }
          &:nth-of-type(2) {
            font-size: 0.4rem;
            font-weight: 600;
          }
        }
      }
      .comment_body {
        text-align: left;
        padding-left: 1.255rem;
        font-weight: 600;
        p {
          &:nth-of-type(1) {
            font-size: 0.45rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:nth-of-type(2) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              &:nth-of-type(1) {
                font-size: 0.4rem;
              }
              &:nth-of-type(2) {
                i {
                  margin-right: 0.2rem;
                  font-size: 0.4rem;
                  &:nth-of-type(1) {
                    &::before {
                      display: inline-block;
                      width: 0.6rem;
                      height: 0.6rem;
                      content: "";
                      background: url("../../../static/img/icon-huifu02.png")
                        no-repeat center/100%;
                      vertical-align: middle;
                    }
                  }
                  &:nth-of-type(2) {
                    &::before {
                      display: inline-block;
                      width: 0.6rem;
                      height: 0.6rem;
                      content: "";
                      background: url("../../../static/img/icon_dianzan02.png")
                        no-repeat center/100%;
                      vertical-align: sub;
                    }
                  }
                }
                .isLike {
                  &::before {
                    display: inline-block;
                    width: 0.6rem;
                    height: 0.6rem;
                    content: "";
                    background: url("../../../static/img/icon_dianzan01.png")
                      no-repeat center/100% !important;
                    vertical-align: sub;
                  }
                }
              }
            }
          }
        }
      }
      .line {
        margin: 0.1rem;
        height: 1px;
        background: #dddddd;
      }
    }
  }
}
</style>