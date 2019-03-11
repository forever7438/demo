<template>
  <div class="setting_content">
    <tips title="我的设置"></tips>
    <div class="account_setting">
      <router-link to="/accountManagement">
        <p>账号管理</p>
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou1"></use>
          </svg>
        </i>
      </router-link>
    </div>
    <div class="meun_setting">
      <ul>
        <li>
          <p>当前版本</p>
          <i>1.0.0</i>
        </li>
        <router-link to="/userAgreement">
          <li>
            <p>用户协议</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </li>
        </router-link>
        <router-link to="/privacyPolicy">
          <li>
            <p>隐私政策</p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou1"></use>
              </svg>
            </i>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import tips from "../../components/tips";
export default {
  name: "mySetting",
  components: {
    tips
  }
};
</script>

<style lang='less' scoped>
.setting_content {
  position: relative;
  top: 1.5rem;
  z-index: 999999;
  .account_setting {
    height: 2rem;
    margin: 0 0.3rem 0.3rem 0.3rem;
    box-shadow: #c5dcff 0 1px 5px 1px;
    border-radius: 0.2rem;
    background: #ffffff;
    a {
      padding: 0 0.5rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.5rem;
      color: #595958;
      font-weight: 600;
    }
  }
  .meun_setting {
    height: calc(100vh - 4.5rem);
    margin: 0 0.3rem 0.3rem 0.3rem;
    box-shadow: #c5dcff 0 1px 5px 1px;
    border-radius: 0.2rem;
    background: #ffffff;
    font-size: 0.5rem;
    ul {
      display: flex;
      flex-direction: column;
      padding: 0.2rem;
      li {
        color: #2c3e50;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dddddd;
        font-weight: 600;
      }
    }
  }
}
</style>