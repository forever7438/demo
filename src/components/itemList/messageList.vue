<template>
  <div class="message_item">
    <div>
      <div class="message_type">
        <img :src="item.action==='system'?iconImageSystem:iconImageNotice">
        <span>{{item.action==='system'?'系统通知':'提示消息'}}</span>
      </div>
      <div class="message_detail">
        <span>
          <i v-if="item.action!='system'">
            <s>{{item.custom[0]}}</s>
            {{item.custom[1]}}{{item.custom[2]}}{{item.custom[3]}}&nbsp;~
          </i>
          <i v-else>{{item.custom[0]}}&nbsp;~</i>
          <i>{{item.createAt | dateformat('YYYY-MM-DD HH:mm:ss') }}</i>
          <!-- <i class="dot"></i> -->
        </span>
      </div>
    </div>
    <span class="del_btn" @click="isShowModel=true">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shanchu-copy"></use>
      </svg>
    </span>

    <!-- 弹窗模块 -->
    <dialogModel v-if="isShowModel">
      <dialogTitle title="确认删除该条消息？"></dialogTitle>
      <dialogBtn
        @cancal="isShowModel=false"
        cancalText="取消"
        confirmText="确定"
        @confirm="delMessage(item.messageId)"
      ></dialogBtn>
    </dialogModel>
  </div>
</template>

<script>
import dialogModel from "../../components/dialog/dialogModel";
import dialogTitle from "../../components/dialog/dialogTitle";
import dialogBtn from "../../components/dialog/dialogBtn";
import { deleteMessage } from "@/api/index";
export default {
  name: "messageList",
  components: {
    dialogModel,
    dialogTitle,
    dialogBtn
  },
  props: {
    item: Object
  },
  data() {
    return {
      iconImageSystem: require("../../../static/img/icon_xitong_01.png"),
      iconImageNotice: require("../../../static/img/icon_tishi_01.png"),
      isShowModel: false
    };
  },
  created() {},
  methods: {
    //删除消息
    async delMessage(messageId) {
      let res = await deleteMessage({
        messageId: messageId
      });

      if (res.data.code === 200) {
        this.isShowModel = false;
        this.$emit("refreshMessageList");
        this.$toast.success({
          mask: true,
          message: "删除成功"
        });
      } else {
        this.$toast({
          mask: true,
          message: res.data.message
        });
      }
    }
  }
};
</script>

<style lang='less' scoped>
.message_item {
  display: flex;
  padding: 0.2rem;
  color: #646464;
  div {
    .message_type {
      text-align: left;
      font-size: 0.4rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        vertical-align: sub;
      }
      span {
        font-weight: 600;
      }
    }
    .message_detail {
      text-align: left;
      font-size: 0.4rem;
      span {
        position: relative;
        i {
          &:nth-of-type(1) {
            display: block;
            width: 7rem;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:nth-of-type(2) {
            font-size: 0.4rem;
            font-weight: 600;
          }
          s {
            text-decoration: none;
            color: #6470e1;
          }
        }
        .dot {
          display: block;
          width: 0.12rem;
          height: 0.15rem;
          border-radius: 50%;
          background: red;
          position: absolute;
          top: -0.8rem;
          right: -3.8rem;
        }
      }
    }
  }
  .del_btn {
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    &:active {
      background-color: #ddd;
      border-radius: 0.1rem;
    }
  }
}
</style>