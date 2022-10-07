<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="sidebarWidth">
        <mainMenu :isCollapse="!isCollapse" />
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <mainHeader @collapse="collapse" />
        </el-header>
        <el-main>
          <el-scrollbar>
            <div class="main-view">
              <router-view v-slot="{ Component }">
                <transition name="el-fade-in-linear" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { ref, computed } from "vue";

import mainMenu from "components/mainMenu";
import mainHeader from "components/mainHeader";

export default {
  components: {
    mainMenu,
    mainHeader,
  },
  setup() {
    const isCollapse = ref(true);

    const collapse = (value) => {
      isCollapse.value = value;
    };

    const sidebarWidth = computed(() => (isCollapse.value ? "210px" : "60px"));

    return {
      collapse,
      isCollapse,
      sidebarWidth,
    };
  },
};
</script>

<style lang="less" scoped>
.widthAndheight100 {
  height: 100%;
  width: 100%;
}
.main {
  .widthAndheight100();
  .main-container {
    .widthAndheight100();
    background-color: #f0f2f5;
    .el-header {
      .widthAndheight100();
      height: 48px;
      background-color: #fff;
    }
    .main-view {
      .widthAndheight100();
      background-color: #f0f2f5;
    }
  }
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>