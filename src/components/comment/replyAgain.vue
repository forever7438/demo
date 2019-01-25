<template>
  <div class="reply_content">
    <ul>
      <li v-for="(item,index) in 1" :key="index">
        <div class="comment_header">
          <img src="../../../static/img/lf.jpg">
          <span>路飞</span>
          <span>六年级一班&nbsp;&nbsp;神龙小学</span>
        </div>
        <div class="comment_body">
          <p>
            @
            <i>乔巴</i>谢谢赞赏！
          </p>
          <p>
            <span>2018-08-01&nbsp;&nbsp;20:25:05</span>
            <span>
              <i>回复</i>
              <i>4</i>
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "replyAgain"
};
</script>

<style lang='less' scoped>
.reply_content {
  background: #dddddd;
  margin: 0 0.1rem 0 0;
  text-align: left;
  ul {
    li {
      .comment_header {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 0 0 0 0.2rem;
        padding-bottom: 0;
        img {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
        }
        span {
          font-weight: 600;
          &:nth-of-type(1) {
            margin: 0 0.3rem 0 0.1rem;
            font-size: 0.5rem;
            color: #4791ee;
          }
          &:nth-of-type(2) {
            font-size: 0.4rem;
          }
        }
      }
      .comment_body {
        text-align: left;
        padding-left: 1rem;
        font-weight: 600;
        p {
          &:nth-of-type(1) {
            font-size: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            i {
              color: #4791ee;
            }
          }
          &:nth-of-type(2) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              &:nth-of-type(1) {
                font-size: 0.4rem;
              }
              &:nth-of-type(2) {
                i {
                  margin-right: 0.2rem;
                  font-size: 0.4rem;
                  &:nth-of-type(1) {
                    &::before {
                      display: inline-block;
                      width: 0.6rem;
                      height: 0.6rem;
                      content: "";
                      background: url("../../../static/img/icon-huifu02.png")
                        no-repeat center/100%;
                      vertical-align: middle;
                    }
                  }
                  &:nth-of-type(2) {
                    &::before {
                      display: inline-block;
                      width: 0.6rem;
                      height: 0.6rem;
                      content: "";
                      background: url("../../../static/img/icon_dianzan02.png")
                        no-repeat center/100%;
                      vertical-align: sub;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>