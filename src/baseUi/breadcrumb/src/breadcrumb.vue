<template>
  <el-breadcrumb :separator="separator">
    <template v-for="item in breadcrumbArray" :key="item.name">
      <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    breadcrumbArray: {
      type: Array,
      default: () => [],
    },
    separator: {
      type: String,
      default: "/",
    },
  },
};
</script>