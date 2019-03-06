<template>
  <div class="reply_content">
    <ul>
      <li v-for="(item,index) in replyList" :key="index">
        <div class="comment_header">
          <img :src="item.replyAvatar || img">
          <span>{{item.replyUsername}}</span>
          <span>{{item.replySchoolName}}&nbsp;&nbsp;{{item.replyClassName}}</span>
        </div>
        <div class="comment_body">
          <p>
            @
            <i>{{item.replyToWhom}}</i>
            &nbsp;{{item.replyContent}}
          </p>
          <p>
            <span>{{item.replyTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
            <span>
              <i @click="showModel(item)">回复</i>
              <i
                :class="[{'isLike':!item.isLiked}]"
                @click="addLikeNum(item.replyId,item.isLiked)"
              >{{item.replyLikeCount}}</i>
            </span>
          </p>
        </div>
        <!-- <replyAgain></replyAgain> -->
        <!-- 回复模块 -->
        <dialogModel v-if="isShowModel">
          <dialogText></dialogText>
          <dialogBtn cancalText="取消" confirmText="确定" @cancal="isShowModel=false" @confirm="handle"></dialogBtn>
        </dialogModel>
      </li>
    </ul>
  </div>
</template>

<script>
import replyAgain from "./replyAgain";
import dialogModel from "../dialog/dialogModel";
import dialogText from "../dialog/dialogText";
import dialogBtn from "../dialog/dialogBtn";
import { like, reply } from "@/api/index";
export default {
  name: "commentReply",
  components: {
    replyAgain,
    dialogModel,
    dialogText,
    dialogBtn
  },
  props: {
    replyList: Array,
    commentId: String
  },
  data() {
    return {
      isShowModel: false,
      img: "../../../static/img/icon_touxiang02.png"
    };
  },
  methods: {
    //点赞
    async addLikeNum(id, isLiked) {
      if (isLiked) {
        return;
      }
      let parmes = {
        targetId: id,
        type: "reply"
      };
      let res = await like(parmes);
      if (res.data.code === 200) {
        this.$parent.getCommentsList(1);
      } else {
        this.$toast({
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
        commentId: this.commentId,
        content: this.$store.state.data.text,
        atUserId: this.replyMessage.replyUserId
      });
      if (res.data.code === 200) {
        this.$parent.getCommentsList(1);
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
    }
  }
};
</script>

<style lang='less' scoped>
.reply_content {
  background: #dddddd;
  margin: 0 0.1rem 0 1.255rem;
  text-align: left;
  ul {
    li {
      .comment_header {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 0.2rem;
        padding-bottom: 0;
        img {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
        }
        span {
          font-weight: 600;
          &:nth-of-type(1) {
            margin: 0 0.3rem 0 0.1rem;
            font-size: 0.5rem;
            color: #4791ee;
          }
          &:nth-of-type(2) {
            font-size: 0.4rem;
          }
        }
      }
      .comment_body {
        text-align: left;
        padding-left: 1rem;
        font-weight: 600;
        p {
          &:nth-of-type(1) {
            font-size: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            i {
              color: #4791ee;
            }
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
    }
  }
}
</style>