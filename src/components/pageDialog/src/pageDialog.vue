<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <search v-bind="dialogConfig" v-model="formData"></search>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref } from "vue";
import search from "baseUi/search";

export default {
  props: {
    dialogConfig: {
      type: Object,
      required: true,
    },
  },
  components: {
    search,
  },
  setup(props) {
    const dialogVisible = ref(false);

    const form = {};

    props.dialogConfig.formItem.forEach((item) => {
      form[item.field] = "";
    });

    const formData = ref({ ...form });


    console.log(props.dialogConfig.formItem);

    return {
      dialogVisible,
      formData,
    };
  },
};
</script>

<style lang="less" scoped></style>
