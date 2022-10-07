<template>
  <div class="loginTabs">
    <el-tabs v-model="activeName" class="demo-tabs" type="border-card" stretch>
      <el-tab-pane name="first">
        <template #label>
          <div class="icon">
            <el-icon><user-filled /></el-icon>
            <span>账号登录</span>
          </div>
        </template>
        <loginAccount ref="loginAccount" />
      </el-tab-pane>
      <el-tab-pane name="second">
        <template #label>
          <div class="icon">
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </div>
        </template>
        <loginPhone ref="loginPhone" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="IsRememberPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button
      type="primary"
      class="login-button"
      @click="loginClick"
      size="large"
      >立即登录</el-button
    >
  </div>
</template>


<script>
import { ref } from "vue";
import { useStore } from "vuex";

import loginAccount from "./loginAccount.vue";
import loginPhone from "./loginPhone.vue";

export default {
  components: {
    loginAccount,
    loginPhone,
  },
  setup() {
    const store = useStore();

    const activeName = ref("first");
    const IsRememberPassword = ref(false);

    const loginAccount = ref(null);
    const loginPhone = ref(null);

    const loginClick = () => {
      if (activeName.value == "first") {
        loginAccount.value.ruleForm.validate((validate) => {
          if (validate) {
            store.dispatch("login/loginAccount", loginAccount.value.userinfo);
          }
        });
      } else {
        store.dispatch("login/loginPhone", loginPhone.value.userinfo);
      }
    };

    return {
      activeName,
      IsRememberPassword,
      loginAccount,
      loginPhone,
      loginClick,
    };
  },
};
</script>


<style lang="less" scoped>
.loginTabs {
  margin-bottom: 200px;
  width: 320px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
  .title {
    text-align: center;
  }
}
.account-control {
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
}
.login-button {
  margin-top: 5px;
  width: 100%;
}
</style>