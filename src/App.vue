<template>
  <div>
    <div class="container">
      <div class="red-green-light">
        <div :class="red"></div>
        <div :class="green"></div>
        <div :class="yellow"></div>
        <!-- <button @click="start(2000)">开始</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red: ["light"],
      green: ["light"],
      yellow: ["light"],
      active: "active",
    };
  },
  methods: {
    start(time) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(3000);
        }, time);
      })
        .then((value) => {
          this.yellow.splice(1, 1);
          this.red.push(this.active);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(5000);
            }, value);
          });
        })
        .then((value) => {
          this.red.splice(1, 1);
          this.green.push(this.active);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(2000);
            }, value);
          });
        })
        .then((value) => {
          this.green.splice(1, 1);
          this.yellow.push(this.active);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(this.start(0));
            }, value);
          });
        });
    },
    // redColor(time) {
    //   this.yellow.splice(1, 1);
    //   this.red.push(this.active);
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(this.greenColor(2000));
    //     }, time);
    //   });
    // },
    // greenColor(time) {
    //   this.red.splice(1, 1);
    //   this.green.push(this.active);
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(this.yellowColor(2000));
    //     }, time);
    //   });
    // },
    // yellowColor(time) {
    //   this.green.splice(1, 1);
    //   this.yellow.push(this.active);
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(this.start(0));
    //     }, time);
    //   });
    // },
  },
  mounted: function () {
    //自动触发写入的函数
    this.start(1000);
  },
};
</script>

<style>
.container {
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.red-green-light {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70px;
  height: 240px;
  background-color: #333;
  border-radius: 5px;
}

.light {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
}

.red-green-light .light:nth-child(1).active {
  background-color: red;
}

.red-green-light .light:nth-child(2).active {
  background-color: green;
}

.red-green-light .light:nth-child(3).active {
  background-color: goldenrod;
}
</style>
