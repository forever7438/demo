<template>
  <div class="btn_content">
    <span class="cancl_btn" @click="sendCancal">{{cancalText}}</span>
    <span class="confirm_btn" @click="sendConfirm">{{confirmText}}</span>
  </div>
</template>

<script>
export default {
  name: "dialogBtn",
  props: {
    cancalText: String,
    confirmText: String
  },
  methods: {
    sendCancal() {
      this.$emit("cancal");
    },
    sendConfirm() {
      this.$emit("confirm");
    }
  }
};
</script>

<style lang='less' scoped>
.btn_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem solid #dddddd;
  font-size: 0.5rem;
  font-weight: 600;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 0.2rem 0;
    &:active {
      background: #dddddd;
    }
  }
  .confirm_btn {
    color: #3688ff;
    border-left: 0.01rem solid #dddddd;
  }
}
</style>