<template>
  <div class="menu">
    <pageContent :listConfig="listConfig" pageName="menu"></pageContent>
  </div>
</template>

<script>
import pageContent from "components/pageContent";
import listConfig from "../config/listConfig";
export default {
  components: {
    pageContent,
  },
  setup() {
    return {
      listConfig,
    };
  },
};
</script>

<style lang="less" scoped>
</style>