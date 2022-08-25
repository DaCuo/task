<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item.name }}<button @click="buyBooksFn(index)">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(item, index) in arr" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.count }}</td>
        <td>{{ total[index] }}</td>
      </tr>
    </table>
    <p>总价格为:{{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
      total: [0, 0, 0, 0],
      totalPrice: 0,
    };
  },
  methods: {
    buyBooksFn(index) {
      this.total[index] = (this.arr[index].count + 1) * this.arr[index].price;
      this.arr[index].count = this.arr[index].count + 1;
      this.totalPrice = this.total.reduce((num, item) => {
        return num + item;
      }, 0);
    },
  },
};
</script>
