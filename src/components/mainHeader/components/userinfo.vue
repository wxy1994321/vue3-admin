<template>
  <div class="user">
    <div class="control">
      <el-icon size="20px"><ice-cream-round /></el-icon>
      <el-icon size="20px"><more-filled /></el-icon>

      <el-badge is-dot class="item">
        <el-icon size="20px"><star /></el-icon>
      </el-badge>
    </div>
    <div class="personalInformation">
      <div>
        <el-avatar :size="35">
          <el-icon size="20px"><user /></el-icon>
        </el-avatar>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon><close-bold /></el-icon>
                退出登录
              </el-dropdown-item>
              <el-dropdown-item>
                <el-icon><user /></el-icon>
                用户信息
              </el-dropdown-item>
              <el-dropdown-item>
                <el-icon><setting /></el-icon>
                系统管理
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const name = computed(() => store.state.login.userInfo.name);
    return {
      name,
    };
  },
};
</script>
<style lang="less" scoped>
.user {
  display: flex;
  height: 100%;
  .control {
    width: 200px;
    height: 100%;
    display: flex;
    padding-right: 20px;
    justify-content: space-around;
    align-items: center;
    .el-icon {
      cursor: pointer;
    }
  }
}
.personalInformation > div {
  height: 100%;
  display: flex;
  align-items: center;
}

.personalInformation {
  .el-dropdown-link {
    padding-left: 10px;
    cursor: pointer;
  }
  .el-avatar {
    cursor: pointer;
  }
}
</style>