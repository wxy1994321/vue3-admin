<template>
  <div class="category">
    <pageSearch
      :searchConfig="searchConfig"
      @searchBtn="searchBtn"
      @refreshBtn="refreshBtn"
    ></pageSearch>
    <pageContent
      :listConfig="listConfig"
      pageName="category"
      ref="pageContentRef"
    ></pageContent>
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