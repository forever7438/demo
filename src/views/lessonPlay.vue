<template>
  <div class="lessonPlay_content">
    <tips title="章节播放"></tips>
    <chapterPlay></chapterPlay>
    <commentItem></commentItem>
  </div>
</template>

<script>
import tips from "../components/tips";
import chapterPlay from "../components/lesson/chapterPlay";
import commentItem from "../components/comment/commentItem";
export default {
  name: "lessonPlay",
  components: {
    tips,
    chapterPlay,
    commentItem
  }
};
</script>

<style lang='less' scoped>
.lessonPlay_content {
  position: relative;
  top: 1.5rem;
  margin-bottom: 2rem;
  z-index: 999999;
}
</style>