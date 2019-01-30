<template>
  <div class="sign_content">
    <textarea>
      陌歌祭，相思不泣，别是忧愁，恰是忧愁，一缕心伤，半生寻觅，咫尺不相见，天涯忘不尽，何其思量。小酌亦伤情，却是哀伤，最是一丝情意浓，却成离别不相逢，莫道销魂相思沉，鬓霜容颜瘦，伊人影朦胧，握不住，昔时温柔手中驻，当是未完，却是结局落幕，浮华三千年，两世不擦肩，只乱尘埃路……
    </textarea>
  </div>
</template>

<script>
export default {
  name: "editSign"
};
</script>

<style lang="less" scoped>
.sign_content {
  display: flex;
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  color: #595958;
  textarea {
    width: 100%;
    height: calc(100vh - 4.5rem);
    border: none;
    font-size: 0.5rem;
    font-weight: 600;
  }
}
</style>