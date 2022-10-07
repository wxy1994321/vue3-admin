<template>
  <div class="">
    <template v-for="item in data" :key="item.slotName">
      <slot :name="item.slotName" :row="item">
        {{ item }}
      </slot>
      <br />
    </template>
  </div>
</template>

<script>
export default {
  props: ["data"],
  setup() {},
};
</script>
