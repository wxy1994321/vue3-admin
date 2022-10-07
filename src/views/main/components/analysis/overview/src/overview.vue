<template>
  <div class="overview">
    <aaa :data="data">
      <template #no1="scope">
        {{ scope }}
      </template>

      <template #no2="scope">
        {{ scope }}
      </template>

      <template #undefined="scope">
        {{ scope }}
      </template>
    </aaa>
    <hr />

    <demo></demo>
  </div>
</template>

<script>
import aaa from "./aaa.vue";
import demo from "./demo.vue";
export default {
  components: {
    aaa,
    demo,
  },
  setup() {
    const data = [
      {
        name: 10,
        value: 20,
        slotName: "no1",
      },
      {
        name: 40,
        value: 50,
        slotName: "no2",
      },
      {
        name: 40,
        value: 50,
      },
      {
        name: 60,
        value: 70,
      },
    ];

    return { data };
  },
};
</script>

<style lang="less" scoped>
.overview {
  height: 100%;
  background: #fff;
}
</style>
