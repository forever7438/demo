<template>
  <div class="commentItem_content">
    <h3>评论</h3>
    <ul>
      <li v-for="(item,index) in 10" :key="index">
        <div class="comment_header">
          <img src="../../../static/img/qb.jpg">
          <span>乔巴</span>
          <span>六年级一班&nbsp;&nbsp;神龙小学</span>
        </div>
        <div class="comment_body">
          <p>做的不错!</p>
          <p>
            <span>2018-08-01&nbsp;&nbsp;20:25:05</span>
            <span>
              <i>回复</i>
              <i>4</i>
            </span>
          </p>
        </div>
        <reply></reply>
        <div class="line"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import reply from "./reply";
export default {
  name: "commentItem",
  components: {
    reply
  }
};
</script>

<style lang='less' scoped>
.commentItem_content {
  margin: 0 0.3rem 0.3rem;
  padding-bottom: 5px;
  box-shadow: #c5dcff 0 1px 5px 1px;
  border-radius: 0.2rem;
  background: #fff;
  h3 {
    text-align: left;
    border-left: 0.1rem solid #5b1ce5;
    margin: 0.1rem 0 0 0.2rem;
    padding-left: 0.1rem;
    color: #5b1ce5;
    font-weight: 800;
    font-size: 0.5rem;
  }
  ul {
    li {
      .comment_header {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 0.2rem;
        padding-bottom: 0;
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
        span {
          &:nth-of-type(1) {
            margin: 0 0.3rem 0 0.1rem;
            font-size: 0.5rem;
            font-weight: 600;
            color: #4791ee;
          }
          &:nth-of-type(2) {
            font-size: 0.4rem;
            font-weight: 600;
          }
        }
      }
      .comment_body {
        text-align: left;
        padding-left: 1.255rem;
        font-weight: 600;
        p {
          &:nth-of-type(1) {
            font-size: 0.45rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
      .line {
        margin: 0.1rem;
        height: 1px;
        background: #dddddd;
      }
    }
  }
}
</style>