<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}<button @click="del(index)">删除</button>
      </li>
    </ul>
    <button @click="btn">生成随机数</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    btn() {
      const num = Math.round(Math.random() * 1000);
      this.arr.push(num);
    },
    del(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>

<style></style>
