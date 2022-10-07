<template>
  <div class="mainMenu">
    <div class="logo">
      <img src="~assets/img/logo.svg" alt="" class="img" />
      <span class="title" v-if="!isCollapse">Vue3</span>
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenuList" :key="item.id">
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <template v-if="item.icon == 'el-icon-monitor'">
                  <monitor />
                </template>
                <template v-else-if="item.icon == 'el-icon-setting'">
                  <setting />
                </template>
                <template v-else-if="item.icon == 'el-icon-goods'">
                  <goods />
                </template>
                <template v-else-if="item.icon == 'el-icon-chat-line-round'">
                  <chat-line-round />
                </template>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="navigation in item.children" :key="navigation.id">
              <el-menu-item-group>
                <el-menu-item
                  :index="navigation.id + ''"
                  @click="jumpTo(navigation)"
                  >{{ navigation.name }}</el-menu-item
                >
              </el-menu-item-group>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>


<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

import { activeMenu } from "utils/filterMenu";
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const stote = useStore();
    const router = useRouter();
    const route = useRoute();
    const userMenuList = computed(() => stote.state.login.userMenuList);

    const defaultActiveMenu = activeMenu(userMenuList.value, route.path);
    const defaultActive = ref(defaultActiveMenu.id + "");

    const jumpTo = ({ url }) => {
      router.push({
        path: url,
      });
    };

    return {
      userMenuList,
      defaultActive,
      jumpTo,
    };
  },
};
</script>

<style lang="less" scoped>
.mainMenu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 48px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}

:deep(.el-menu-item.is-active) {
  color: #fff !important;
  background-color: #0a60bd !important;
}
</style>