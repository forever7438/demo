<template>
  <div class="head_portrait_content">
    <span>头像</span>
    <img :src="userImg">
    <input type="file" id="img_file" @change="getImgFile">
    <!-- 进度显示 -->
    <progress :complete="complete"></progress>
  </div>
</template>

<script>
import progress from "../progress";
import { ossDir } from "../../config/url.js";
import { Decrypt, randomString } from "@/assets/js/utils.js";
import { changeAvatar, getS3Properties } from "@/api/index";
export default {
  name: "headPortrait",
  components: {
    progress
  },
  data() {
    return {
      complete: 0,
      option: null,
      s3: null,
      imgKey: null,
      imgFile: null,
      userImg: "../../../static/img/lf.jpg"
    };
  },
  created() {
    this.getS3Data();
  },
  methods: {
    //修改个人头像
    getImgFile() {
      const file = document.querySelector("#img_file").files[0];
      const imgType = ["image/gif", "image/jpeg", "image/png"];
      this.imgFile = file;
      if (!imgType.includes(this.imgFile.type)) {
        this.imgFile = null;
        this.$dialog.alert({
          message: "格式不正确,请重新上传"
        });
        return;
      } else {
        //显示头像
        this.userImg = URL.createObjectURL(this.imgFile);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(theFile) {
          let image = new Image();
          image.src = theFile.target.result;
          image.onload = function() {
            file.width = this.width;
            file.height = this.height;
          };
        };
        file.names = `${this.option.env}/${ossDir.avator}/${randomString()}.${
          file.name.split(".")[file.name.split(".").length - 1]
        }`;
        this.uploadFilesImg(file);
      }
    },
    //获取对象存储配置信息
    async getS3Data() {
      let res = await getS3Properties();
      //将key iv存储在session里
      sessionStorage.setItem("key", res.data.data.key);
      sessionStorage.setItem("iv", res.data.data.iv);
      //将配置信息解密
      this.option = Decrypt(res.data.data.message);
      this.s3 = new AWS.S3({
        accessKeyId: this.option.accessKey,
        secretAccessKey: this.option.secretKey,
        region: this.option.region,
        endpoint: this.option.endpoint
      });
    },
    // 上传图片到s3服务器
    async uploadFilesImg(file) {
      if (file) {
        var params = {
          Bucket: this.option.bucketName,
          Key: file.names,
          Body: file
        };
        var _this = this;
        var upload = this.s3
          .upload(params, {
            queueSize: 1,
            connectTimeout: 60 * 1000 * 10,
            httpOptions: {
              timeout: 60 * 1000 * 10
            }
          })
          .on("httpUploadProgress", function(e) {
            _this.complete = ((e.loaded / e.total) * 100) | 0;
          });

        function sendUpload() {
          upload.send(function(err, data) {
            if (err) {
              _this.$toast.fail({
                mask: true,
                message: err
              });
            } else {
              _this.imgKey = data.key
                .split("/")
                .slice(1)
                .join("/");
              _this.submitInfo();
            }
          });
        }
        sendUpload();
      }
    },
    //信息提交后台
    async submitInfo() {
      let params = {
        avatar: this.imgKey,
        imageLength: this.imgFile.size,
        imageSize: [this.imgFile.width, this.imgFile.height].toString()
      };
      let res = await changeAvatar(params);
      if (res.data.code === 200) {
        this.$toast({
          mask: true,
          message: "提交成功,等待后台管理员审核"
        });
      } else {
        // this.isLoading = false;
        // this.complete = 0;
        this.$toast({
          mask: true,
          message: res.data.message
        });
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