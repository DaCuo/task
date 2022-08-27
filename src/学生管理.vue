<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="obj.name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="obj.age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="obj.gender">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addMsg">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { name: "大挫", age: 18, gender: "男" },
        { name: "阿强", age: 15, gender: "女" },
      ],
      obj: {
        name: "",
        age: "",
        gender: "",
      },
      flag: true,
      index: "",
    };
  },
  methods: {
    addMsg() {
      if (this.obj.name === "" ||this.obj.age === "" ||this.obj.gender === "")return alert("愣着干啥赶紧写信息啊");
      if (this.flag) {
        this.arr.push(this.obj);
        this.obj = {};
      } else {
        this.$set(this.arr, this.index, this.obj);
        this.obj = {};
        this.flag = true;
      }
    },
    edit(index) {
      this.flag = false;
      this.obj = Object.assign({ ...this.obj, ...this.arr[index] });
      this.index = this.arr.findIndex(
        (item) => JSON.stringify(item) == JSON.stringify(this.obj)
      );
    },
    del(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
