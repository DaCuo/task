<template>
  <div class="box">
    <div>
      <span>{{ title }}</span>
      <span  v-for="item in hobbyArr" > {{ item }}</span>
    </div>

    <dog-sub
      v-for="(item, index) in arr"
      :key="index"
      :imgUrl="item.dogImgUrl"
      :imgName="item.dogName"
      :index="index"
      @hobbyDogName="hobbyFn"
    />
  </div>
</template>

<script>
import DogSub from "@/components/DogSub.vue";
export default {
  data() {
    return {
      arr: [
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2Ftx27%2F46111103216272.png&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664156182&t=9780053d017437164a21a40a59acda7e",
          dogName: "艾斯",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F29%2F2220501671.jpg&refer=http%3A%2F%2Fimg.duoziwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664156140&t=7d16397fd48ec5756a5b9f0b53512126",
          dogName: "路飞",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.imeitou.com%2Fuploads%2Fallimg%2F2016060813%2Fuh1vc3vpt2h.jpg&refer=http%3A%2F%2Fwww.imeitou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664156122&t=a5899ba4e0505cf89310701185090b22",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/baike/s%3D220/sign=9278f7ef3ef33a879a6d0718f65d1018/e61190ef76c6a7ef895adcf9f9faaf51f2de66f4.jpg",
          dogName: "多弗洛朗明哥",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.duoziwang.com%2F2017%2F09%2F1609253076539.jpg&refer=http%3A%2F%2Fimg.duoziwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664155952&t=b9e6a6f9f0074de84b68506fc3b42c67",
          dogName: "大鼻子",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.duoziwang.com%2F2018%2F19%2F07111648924208.jpg&refer=http%3A%2F%2Fimg.duoziwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664155902&t=5b555362d9241514d8e24d3f85c97e05",
          dogName: "索隆",
        },
      ],
      title: "点击选择你喜欢的角色：",
      hobbyArr: [],
    };
  },
  methods: {
    hobbyFn(index) {
      this.hobbyArr.push(this.arr[index].dogName);
    },
  },
  components: {
    DogSub,
  },
};
</script>

<style scoped>
.box {
  margin: 50px auto;
  width: 800px;
}
</style>
