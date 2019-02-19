<template>
  <div class="head_portrait_content">
    <span>头像</span>
    <img :src="userImg">
    <input type="file" id="img_file" @change="getImgFile">
  </div>
</template>

<script>
export default {
  name: "headPortrait",
  data() {
    return {
      imgFile: null,
      userImg: "../../../static/img/lf.jpg"
    };
  },
  methods: {
    getImgFile() {
      this.imgFile = document.querySelector("#img_file").files[0];2
      const imgType = ["image/gif", "image/jpeg", "image/png"];
      if (!imgType.includes(this.imgFile.type)) {
        this.imgFile = null;
        this.$dialog.alert({
          message: "格式不正确,请重新上传"
        });
        return;
      } else {
        //显示头像
        this.userImg = URL.createObjectURL(this.imgFile);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.head_portrait_content {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
  margin: 0 0.3rem 0.3rem 0.3rem;
  padding: 0.3rem 0.5rem 0.3rem 0.3rem;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #ffffff;
  color: #595958;
  span {
    font-size: 0.5rem;
    font-weight: 600;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 0.05rem solid #358dfd;
  }
  input {
    position: absolute;
    right: 0.55rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    opacity: 0;
  }
}
</style>