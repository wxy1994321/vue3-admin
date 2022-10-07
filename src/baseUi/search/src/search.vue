<template>
  <div class="search">
    <el-form ref="ruleFormRef" :label-width="labelWidth" class="demo-ruleForm">
      <el-row :gutter="gutter">
        <template v-for="item in formItem" :key="item.label">
          <el-col v-bind="layout" :style="spacing">
            <template v-if="item.type == 'text'">
              <el-form-item :label="item.label">
                <el-input
                  v-bind="item.property"
                  v-model="formDataCopy[item.field]"
                />
              </el-form-item>
            </template>

            <template v-if="item.type == 'password'">
              <el-form-item :label="item.label">
                <el-input
                  v-bind="item.property"
                  v-model="formDataCopy[item.field]"
                />
              </el-form-item>
            </template>
            <template v-if="item.type == 'select'">
              <el-form-item :label="item.label">
                <el-select
                  v-bind="item.property"
                  style="width: 100%"
                  v-model="formDataCopy[item.field]"
                >
                  <template v-for="option in item.option" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </el-form-item>
            </template>
            <template v-if="item.type == 'datePicker'">
              <el-form-item :label="item.label">
                <el-date-picker
                  v-bind="item.property"
                  v-model="formDataCopy[item.field]"
                />
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="search-btn">
      <slot name="search-btn"></slot>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  props: {
    gutter: {
      type: Number,
      default: 10,
    },
    layout: {
      type: Object,
      default: () => ({ xl: 8, lg: 8, md: 12, sm: 12, xs: 24 }),
    },
    labelWidth: {
      type: Number,
      default: 80,
    },
    formItem: {
      type: Object,
      default: () => ({}),
    },
    spacing: {
      type: Object,
      default: () => ({ padding: "10px 40px" }),
    },
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:model-value"],
  setup(props, { emit }) {
    const formDataCopy = reactive({ ...props.modelValue });

    watch(
      formDataCopy,
      (newVal) => {
        emit("update:model-value", newVal);
      },
      { deep: true }
    );

    return {
      formDataCopy,
    };
  },
};
</script>

<style lang="less" scoped>
.search {
  padding: 20px 20px 0;
  .el-form-item {
    display: flex;
    align-items: center;
  }
}
</style>
