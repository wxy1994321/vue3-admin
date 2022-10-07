<template>
  <div class="user">
    <pageSearch
      :searchConfig="searchConfig"
      @searchBtn="searchBtn"
      @refreshBtn="refreshBtn"
    >
    </pageSearch>

    <pageContent
      pageName="users"
      :listConfig="listConfig"
      ref="pageContentRef"
      @newdata="newdata"
    >
    </pageContent>

    <pageDialog ref="pageDialogRef" :dialogConfig="dialogConfig"></pageDialog>
  </div>
</template>

<script>
import pageSearch from "components/pageSearch";
import searchConfig from "../config/searchConfig";
import usePageSearch from "hooks/pageSearch.js";

import pageContent from "components/pageContent";
import listConfig from "../config/listConfig";
import usePageContent from "hooks/pageContent.js";

import pageDialog from "components/pageDialog";
import dialogConfig from "../config/dialogConfig";

export default {
  components: {
    pageSearch,
    pageContent,
    pageDialog,
  },
  setup() {
    const { pageContentRef, searchBtn, refreshBtn } = usePageSearch();

    const { newdata, pageDialogRef } = usePageContent();

    return {
      searchConfig,
      listConfig,
      pageContentRef,
      searchBtn,
      refreshBtn,
      newdata,
      pageDialogRef,
      dialogConfig,
    };
  },
};
</script>

<style lang="less" scoped></style>
