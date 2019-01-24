<template>
  <div class="message_content">
    <tips title="我的消息"></tips>
    <div class="message_list">
      <messageList v-for="(item,index) in 10" :key="index"></messageList>
    </div>
  </div>
</template>

<script>
import tips from "../../components/tips";
import messageList from "../../components/itemList/messageList";
export default {
  name: "myMessage",
  components: {
    tips,
    messageList
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