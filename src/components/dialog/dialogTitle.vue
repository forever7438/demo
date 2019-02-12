<template>
  <div class="title_content">
    <span class="icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jinggao-copy"></use>
      </svg>
    </span>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "dialogTitle",
  props: {
    title: String
  }
};
</script>

<style lang='less' scoped>
.title_content {
  font-size: 0.5rem;
  font-weight: 600;
  .icon {
    font-size: 0.8rem;
  }
}
</style>