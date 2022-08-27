<template>
  <div>
    <h2>商品清单</h2>
    <goods-price-class
      v-for="(item, index) in arr"
      :shopName="item.shopName"
      :price="item.price"
    />
    <h4>购买数量</h4>
    <goods-price
      v-for="(item, index) in arr"
      :key="index"
      :item="item"
      :index="index"
      @addPrice="addPrice"
      @delPrice="delPrice"
    />
    <h3>合计总价：{{ totalPrice }}</h3>
  </div>
</template>

<script>
import GoodsPriceClass from "@/components/GoodsPriceClass.vue"; //商品分类组件
import GoodsPrice from "@/components/GoodsPrice.vue"; //商品分类组件价格组件
export default {
  data() {
    return {
      arr: [
        {
          shopName: "可比克薯片",
          price: 5.5,
          count: 0,
        },
        {
          shopName: "草莓酱",
          price: 3.5,
          count: 0,
        },
        {
          shopName: "红烧肉",
          price: 55,
          count: 0,
        },
        {
          shopName: "方便面",
          price: 12,
          count: 0,
        },
      ],
    };
  },
  methods: {
    addPrice() {},
    delPrice() {},
  },
  computed: {
    totalPrice() {
      return this.arr.reduce((sum, obj) => (sum += obj.count * obj.price), 0);
    },
  },
  components: {
    GoodsPriceClass,
    GoodsPrice,
  },
};
</script>

<style></style>
