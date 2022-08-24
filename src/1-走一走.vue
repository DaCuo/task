<template>
  <div>
    <ul>
      <li v-for="item in arr">{{ item }}</li>
    </ul>
    <button @click="btn">大胆往前走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["帅哥", "美女", "程序猿"],
    };
  },
  methods: {
    btn() {
      this.arr.push(this.arr[0]);
      this.arr.shift();
    },
  },
};
</script>

<style></style>
