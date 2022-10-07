<template>
  <div class="pageSearch">
    <search v-bind="searchConfig" v-model="formData">
      <template #search-btn>
        <div class="btns">
          <el-button size="large" @click="refreshBtn">
            <el-icon><RefreshRight /></el-icon>
            重置
          </el-button>
          <el-button type="primary" size="large" @click="searchBtn">
            <el-icon><Search /></el-icon>
            查询
          </el-button>
        </div>
      </template>
    </search>
  </div>
</template>

<script>
import { ref } from "vue";

import search from "baseUi/search";

export default {
  components: {
    search,
  },
  props: {
    searchConfig: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    //初始化字段
    const form = {};
    props.searchConfig.formItem.forEach((item) => {
      form[item.field] = "";
    });
    const formData = ref({ ...form });

    const refreshBtn = () => {
      for (const key in form) {
        formData.value[key] = form[key];
      }
      emit("refreshBtn");
    };

    const searchBtn = () => {
      emit("searchBtn", formData.value);
    };

    return {
      formData,
      refreshBtn,
      searchBtn,
    };
  },
};
</script>

<style lang="less" scoped>
.pageSearch {
  background-color: #fff;
  border-bottom: 20px solid #f0f2f5;
}
.btns {
  text-align: right;
  padding: 0 40px 20px 0;
}
.el-icon {
  margin-right: 5px;
}
</style>