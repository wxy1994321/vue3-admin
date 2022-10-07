<template>
  <div class="mainHeader">
    <div class="collapse">
      <el-icon size="25px" @click="changeCollapse">
        <template v-if="collapse">
          <fold />
        </template>
        <template v-else>
          <expand />
        </template>
      </el-icon>
    </div>
    <div class="breadcrumb"><breadcrumb :breadcrumbArray="breadcrumb" /></div>
    <div class="userinfo"><userinfo /></div>
  </div>
</template>


<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import breadcrumb from "baseUi/breadcrumb";
import userinfo from "../components/userinfo.vue";
import { breadcrumbFn } from "utils/filterMenu";

export default {
  components: {
    breadcrumb,
    userinfo,
  },
  emits: ["collapse"],
  setup(props, { emit }) {
    const store = useStore();
    const roure = useRoute();

    const collapse = ref(true);
    const changeCollapse = () => {
      collapse.value = !collapse.value;
      emit("collapse", collapse.value);
    };

    const breadcrumb = computed(() => {
      const userMenuList = store.state.login.userMenuList;
      const path = roure.path;
      return breadcrumbFn(userMenuList, path);
    });

    return {
      collapse,
      changeCollapse,
      breadcrumb,
    };
  },
};
</script>

<style lang="less" scoped>
.mainHeader {
  display: flex;
  width: 100%;
  height: 100%;
  .collapse {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .breadcrumb {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .userinfo {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
  }
  .el-icon {
    cursor: pointer;
  }
}
</style>