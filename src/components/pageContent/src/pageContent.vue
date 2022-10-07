<template>
  <div class="pageContent">
    <list
      :tableData="tableData"
      :totalCount="totalCount"
      v-bind="listConfig"
      v-model:page="page"
    >
      <template #header>
        <el-button type="primary" @click="newdata" size="large">
          <el-icon><Plus /></el-icon>
          新建数据
        </el-button>
      </template>

      <template #enable="scope">
        <el-tag :type="scope.row.enable == 1 ? 'success' : 'danger'">
          {{ $filters.showStatus(scope.row.enable) }}
        </el-tag>
      </template>
      <template #createAt="scope">
        <div>{{ $filters.formatTime(scope.row.createAt) }}</div>
      </template>

      <template #updateAt="scope">
        <div>{{ $filters.formatTime(scope.row.updateAt) }}</div>
      </template>

      <template #operations="scope">
        <el-link
          type="primary"
          @click="edit(scope.row)"
          size="small"
          :underline="false"
          style="margin-right: 20px"
        >
          <el-icon><EditPen /></el-icon>
          编辑
        </el-link>
        <el-link
          type="warning"
          @click="del(scope.row)"
          size="default"
          :underline="false"
        >
          <el-icon><Delete /></el-icon>
          删除
        </el-link>
      </template>

      <template
        v-for="item in otherSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </list>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";

import list from "baseUi/list";

export default {
  components: {
    list,
  },
  props: {
    pageName: {
      type: String,
      required: true,
    },
    listConfig: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const page = ref({ currentPage: 1, pageSize: 10 });
    const getData = (queryInfo = {}) => {
      store.dispatch("tableData/getData", {
        pageName: props.pageName,
        query: {
          size: page.value.pageSize,
          offset: (page.value.currentPage - 1) * page.value.pageSize,
          ...queryInfo,
        },
      });
    };
    getData();

    const tableData = computed(() =>
      store.getters["tableData/getList"](props.pageName)
    );
    const totalCount = computed(() =>
      store.getters["tableData/getTotalCount"](props.pageName)
    );

    const otherSlots = computed(() => {
      return props.listConfig.propList.filter((item) => {
        if (item.slotName == "enable") {
          return false;
        } else if (item.slotName == "createAt") {
          return false;
        } else if (item.slotName == "updateAt") {
          return false;
        } else if (item.slotName == "operations") {
          return false;
        } else if (item.slotName == undefined || item.slotName == "") {
          return false;
        } else {
          return true;
        }
      });
    });
    const edit = (row) => {
      console.log(row);
    };

    const del = (row) => {
      console.log(row);
    }
    const newdata = () => {
      emit("newdata");
    };

    watch(page, (val) => {
      getData();
    });

    return {
      tableData,
      totalCount,
      edit,
      del,
      newdata,
      page,
      getData,
      otherSlots,
    };
  },
};
</script>

<style lang="less" scoped>
.pageContent {
  background-color: #fff;
  .el-icon {
    margin-right: 5px;
  }
}
</style>