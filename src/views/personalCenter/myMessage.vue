<template>
  <div class="message_content">
    <tips title="我的消息"></tips>
  </div>
</template>

<script>
import tips from "../../components/tips";
export default {
  name: "myMessage",
  components: {
    tips
  }
};
</script>

<style lang='less' scoped>
.message_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
}
</style>