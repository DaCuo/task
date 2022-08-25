<template>
  <div>
    <span v-for="(item, index) in arr" :key="index"
      ><input type="checkbox" :value="item" v-model="computedArr" />
      {{ item }}
    </span>
    <br />
    <h2>你选中的数和为：{{ sun }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      computedArr: [],
      sun: "",
    };
  },
  watch: {
    computedArr() {
      // console.log(this.computedArr);
      this.sun = this.computedArr.length > 0 ? this.computedArr.reduce((pic, item) => pic + item):""
    },
  },
};
</script>

<style></style>
