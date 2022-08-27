<template>
  <div>
    <span
      >{{ item.shopName }} <button @click="delNum">-</button> {{ item.count }}
      <button @click="addNum">+</button></span
    >
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    addNum() {
      this.item.count++;
    },
    delNum() {
      this.item.count--;
    },
  },
};
</script>

<style></style>
