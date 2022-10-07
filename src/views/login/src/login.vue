<template>
  <div class="login">
    <loginTabs></loginTabs>
  </div>
  <bongoCat class="bongoCat" />
</template>

<script>
import loginTabs from "./components/loginTabs.vue";
import bongoCat from "baseUi/bongoCat";

export default {
  components: {
    loginTabs,
    bongoCat,
  },
  setup() {},
};
</script>


<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("assets/img/login-bg.svg");
  position: relative;
}
.bongoCat {
  position: absolute;
  bottom: 0;
  right: 30px;
}
</style>