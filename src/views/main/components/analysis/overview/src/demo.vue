<template>
  <div>
    <el-form ref="form">
      <el-row :gutter="gutter">
        <template v-for="item in formConfig" :key="item">
          <el-col v-bind="layout" :style="style">
            <template v-if="item.type == 'text'">
              <el-input placeholder="Please input" />
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    formConfig: {
      type: Array,
    },
    gutter: {
      type: Number,
      default: 0,
    },
    layout: {
      type: Object,
      default: () => ({ xl: 8, lg: 8, md: 12, sm: 12, xs: 24 }),
    },
    style: {
      type: Object,
      default: () => ({ padding: "10px 0" }),
    },
  },
  setup() {
    const form = ref(null);
    return {
      form,
    };
  },
};
</script>
