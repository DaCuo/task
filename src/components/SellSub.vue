<template>
  <table>
    <tr>
      <td><input type="number" v-model.number="item.count" /></td>
      <td>
        <span>{{ item.goodsName }}</span>
      </td>
      <td v-show="item.count <= 0">卖光了!!!</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item"],
};
</script>

<style></style>
