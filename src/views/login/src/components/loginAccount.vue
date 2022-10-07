<template>
  <div class="loginAccount">
    <el-form
      class="demo-ruleForm"
      :rules="rules"
      :model="userinfo"
      ref="ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="userinfo.name" clearable size="large"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          v-model="userinfo.password"
          clearable
          size="large"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { reactive, ref } from "vue";
import { rules } from "../config/rules";
export default {
  setup() {
    const userinfo = reactive({
      name: "coderwhy",
      password: "123456",
    });

    const ruleForm = ref(null);

    return {
      userinfo,
      ruleForm,
      rules,
    };
  },
};
</script>

<style lang="less" scoped>
</style>