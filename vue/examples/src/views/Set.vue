<template>
  <div>
    <h1>this is a {{title}} page</h1>
    <p>
      索引：{{arr[0]}} {{arr[10]}} {{obj.c}}
      <button @click="handleClickIndex">修改索引</button>
    </p>
  </div>
</template>
<script>
let obj = { a: 10 };
export default {
  data() {
    return {
      title: "set",
      arr: [0, 1, 2],
      obj: {
        a: 1,
        b: 2,
      },
    };
  },
  methods: {
    handleClickIndex() {
      //   this.arr[0] = 10; // 不生效
      this.$set(this.arr, 0, 10);
      this.$set(this.arr, 10, 100);
      this.$set(obj, "b", 20);
      this.$set(this.obj, "c", 3);
      console.log(obj, this.obj);
    },
  },
};
</script>