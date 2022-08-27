<template>
  <div>
    <!-- <sell-sub
      v-for="(item, index) in goodsArr"
      :key="index"
      :count="item.count"
      :index="index"
      :name="item.goodsName"
    /> -->
    <sell-sub v-for="(item, index) in goodsArr" :key="index" :item="item" />
    <h2>{{ nameStr }}{{ cpd }}</h2>
  </div>
</template>

<script>
import SellSub from "@/components/SellSub.vue";
export default {
  data() {
    return {
      goodsArr: [
        {
          count: 0,
          goodsName: "Watermelon",
        },
        {
          count: 0,
          goodsName: "Banana",
        },
        {
          count: 0,
          goodsName: "Orange",
        },
        {
          count: 0,
          goodsName: "Pineapple",
        },
        {
          count: 0,
          goodsName: "Strawberry",
        },
      ],
      nameStr: "All Number:",
    };
  },
  computed: {
    cpd() {
      return this.goodsArr.reduce((pre, item) => pre + item.count, 0);
    },
  },
  components: {
    SellSub,
  },
};
</script>

<style></style>
