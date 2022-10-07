<template>
  <div class="goods">
    <pageSearch
      :searchConfig="searchConfig"
      @searchBtn="searchBtn"
      @refreshBtn="refreshBtn"
    ></pageSearch>
    <pageContent :listConfig="listConfig" pageName="goods" ref="pageContentRef">
      <template #status="scope">
        <el-tag :type="scope.row.status == 1 ? 'success' : 'danger'">
          {{ $filters.showStatus(scope.row.status) }}
        </el-tag>
      </template>
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
          preview-teleported
        />
      </template>
    </pageContent>
  </div>
</template>

<script>
import pageSearch from "components/pageSearch";
import searchConfig from "../config/searchConfig";

import pageContent from "components/pageContent";
import listConfig from "../config/listConfig";

import usePageSearch from "hooks/pageSearch";

export default {
  components: {
    pageSearch,
    pageContent,
  },
  setup() {
    const { pageContentRef, searchBtn, refreshBtn } = usePageSearch();
    return {
      searchConfig,
      listConfig,
      pageContentRef,
      searchBtn,
      refreshBtn,
    };
  },
};
</script>

<style lang="less" scoped>
</style>