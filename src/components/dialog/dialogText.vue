<template>
  <div class="text_content">
    <textarea v-model="text" @change="saveText"></textarea>
  </div>
</template>

<script>
export default {
  name: "dialogText",
  data() {
    return {
      text: null
    };
  },
  methods: {
    saveText() {
      this.$store.commit("SET_TEXT", this.text);
    }
  }
};
</script>

<style lang='less' scoped>
.text_content {
  font-size: 0.5rem;
  textarea {
    width: 100%;
    height: 3rem;
    padding: 0.1rem;
  }
}
</style>