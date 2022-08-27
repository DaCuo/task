<template>
  <div>
    <span>{{shopName}} {{price}}/份</span>
  </div>
</template>

<script>
export default {
  props: ["shopName", "price"],
};
</script>

<style></style>
