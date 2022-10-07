<template>
  <div class="loginPhone">
    <el-form class="demo-ruleForm" :model="userinfo" :rules="rulesphone">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="userinfo.phone" clearable size="large"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="VerificationCode">
        <div class="VerificationCode">
          <el-input
            v-model="userinfo.VerificationCode"
            clearable
            size="large"
          ></el-input>
          <el-button type="primary" size="large">获取验证</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { reactive } from "vue";
import { rulesphone } from "../config/rules";
export default {
  setup() {
    const userinfo = reactive({
      phone: "15114593816",
      VerificationCode: "",
    });

    return {
      userinfo,
      rulesphone,
    };
  },
};
</script>

<style lang="less" scoped>
.VerificationCode {
  display: flex;
  .el-button {
    margin-left: 15px;
  }
}
</style>