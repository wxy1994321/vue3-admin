<template>
  <div class="dashboard">dashboard</div>
</template>

<script>
import { useStore } from "vuex";
import axios from "axios";
export default {
  setup() {
    const store = useStore();
    store.dispatch("dashboardData/getDashboardData");

    axios
      .get(
        "https://www.fastmock.site/mock/c71e2b77ed57281d267b78628a3a0cf3/api/login",
        {
          params: {
            name: "wx",
            age: 27,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });

    return {};
  },
};
</script>

<style lang="less" scoped>
.dashboard {
  height: 100%;
}
</style>
