<template>
  <div class="message_content">
    <tips title="我的消息" :showDel="true" @showBtn="isShowModel=true"></tips>
    <div v-if="messageList.length" class="message_list">
      <messageLists
        v-for="(item,index) in messageList"
        :key="index"
        :item="item"
        @refreshMessageList="getMessageList"
      ></messageLists>
    </div>
    <noContent v-else></noContent>
    <!-- 弹窗模块 -->
    <dialogModel v-if="isShowModel">
      <dialogTitle title="确认删除全部消息？"></dialogTitle>
      <dialogBtn
        @cancal="isShowModel=false"
        cancalText="取消"
        confirmText="确定"
        @confirm="delAllMessage"
      ></dialogBtn>
    </dialogModel>
  </div>
</template>

<script>
import tips from "../../components/tips";
import messageLists from "../../components/itemList/messageList";
import dialogModel from "../../components/dialog/dialogModel";
import dialogTitle from "../../components/dialog/dialogTitle";
import dialogBtn from "../../components/dialog/dialogBtn";
import noContent from "../../components/noContent";
import { messageList, deleteAllMessage } from "@/api/index";
export default {
  name: "myMessage",
  components: {
    tips,
    messageLists,
    dialogModel,
    dialogTitle,
    dialogBtn,
    noContent
  },
  data() {
    return {
      messageList: [],
      isShowModel: false
    };
  },
  created() {
    this.getMessageList();
  },
  methods: {
    //自定义拼接消息
    splicingStr() {
      this.messageList.map(res => {
        if (res.action == "notice") {
          let strArr = res.content.split("$");
          if (strArr.length === 3) {
            strArr.shift();
          } else if (strArr.length === 4) {
            strArr = strArr;
          } else if (strArr.length === 5 && strArr[strArr.length - 1]) {
            strArr.shift();
          } else {
            strArr.pop();
            strArr.shift();
          }
          res.custom = strArr;
        } else {
          let strArr = res.content.split("$");
          res.custom = strArr;
        }
      });
    },
    //获取消息列表
    async getMessageList() {
      let res = await messageList();
      if (res.data.code === 200) {
        this.messageList = res.data.data.messageList;
        this.splicingStr();
      }
    },
    //删除全部消息
    async delAllMessage() {
      let res = await deleteAllMessage();
      if (res.data.code === 200) {
        this.getMessageList();
        this.isShowModel = false;
        this.$toast.success({
          mask: true,
          message: "删除成功"
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
.message_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
  .message_list {
    margin: 0 0.3rem 0.3rem 0.3rem;
    box-shadow: #c5dcff 0 1px 5px 1px;
    border-radius: 0.2rem;
    background: #ffffff;
  }
}
</style>