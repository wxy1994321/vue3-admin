<template>
  <div class="list">
    <div class="list-header">
      <slot name="header"></slot>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :border="border"
      :size="size"
      :row-key="rowKey"
      @selection-change="selectionChange"
      :tree-props="treeProps"
      :default-expand-all="defaultExpandAll"
    >
      <template v-if="showSelection">
        <el-table-column type="selection" width="60px" align="center" />
      </template>
      <template v-if="showIndex">
        <el-table-column type="index" label="序号" width="100" align="center" />
      </template>

      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row" >
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="list-footer" v-if="isShowFooter">
      <slot>
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
    border: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    propList: {
      type: Array,
      required: true,
    },
    showSelection: {
      type: Boolean,
      default: false,
    },
    showIndex: {
      type: Boolean,
      default: false,
    },
    rowKey: {
      type: String,
      default: "",
    },
    treeProps: {
      type: Object,
      default: () => ({}),
    },
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
    isShowFooter: {
      type: Boolean,
      default: true,
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 10 }),
    },
  },
  emits: ["update:page"],
  setup(props, { emit }) {
    const selectionChange = (selection) => {
      console.log(selection);
    };
    //当前是第几页
    const handleCurrentChange = (currentPage) => {
      emit("update:page", { ...props.page, currentPage });
    };

    //一页显示多少条
    const handleSizeChange = (pageSize) => {
      emit("update:page", { ...props.page, pageSize });
    };

    return {
      selectionChange,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style lang="less" scoped>
.list {
  padding: 20px;
  .list-header {
    display: flex;
    justify-content: right;
    margin-bottom: 20px;
  }
  .list-footer {
    padding-top: 20px;
    display: flex;
    justify-content: right;
  }
}
</style>