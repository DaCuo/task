<template>
    <div class="my_div">
      <img :src="imgUrl" />
      <p :style="{ color: color }" @click="colBtn">
        {{ imgName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "imgName","index"],
  data() {
    return {
      color: "",
    };
  },
  methods: {
    colBtn() {
      this.color = `rgb(${Math.round(Math.random() * 256)}, ${Math.round(
        Math.random() * 256
      )}, ${Math.round(Math.random() * 256)})`;
      this.$emit("hobbyDogName",this.index)
    },
  },
};
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  margin-left: 1px;
  margin-bottom: 1px;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
