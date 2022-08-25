<template>
  <div>
    <table>
      <caption>
        <h2>{{ fruits }}</h2>
      </caption>
      <thead>
        <tr>
          <th>苹果￥{{ jinPrice }}/ 斤数，{{ discount }}折扣</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>请输入你要购买的斤数</span>
            <input type="text" v-model.number="needJin" />
          </td>
        </tr>
        <tr>
          <td>
            <button @click="btn">结账买单~</button>
          </td>
        </tr>
        <tr>
          <td>
            <span>结账单: 总价: {{ totalPrice }}￥元</span> &nbsp;
            <span>折价后:{{ discountPrice }}￥元</span> &nbsp;
            <span>省了:{{ savePrice }}￥元</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: "大矬水果店",
      jinPrice: 10,
      discount: 0.8,
      needJin: 0,
      totalPrice: 0,
      discountPrice: 0,
      savePrice: 0,
    };
  },
  methods: {
    btn() {
      this.totalPrice = this.needJin * 10;
      this.discountPrice = this.totalPrice * this.discount;
      this.savePrice = this.totalPrice - this.discountPrice;
    },
  },
};
</script>

<style>
table {
  width: 500px;
  height: 200px;
  border: 1px solid #000;
  margin: 50px auto;
  text-align: center;
}
th,
tr,
td {
  border: 1px solid #000;
  height: 50px;
}
</style>
