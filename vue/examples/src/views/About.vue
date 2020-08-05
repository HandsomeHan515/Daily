<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>使用 Object.freeze 将数据变为只读，减少对数据的劫持</h2>
    <div>
      <p v-for="item in tableInfo.result" :key="item.id">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableInfo: {
        total: 0,
        result: Object.freeze([
          { id: 1, title: "one" },
          { id: 2, title: "two" },
          { id: 3, title: "3" },
          { id: 4, title: "4" },
          { id: 5, title: "5" },
          { id: 6, title: "6" },
          { id: 7, title: "7" },
          { id: 8, title: "8" },
        ]),
      },
    };
  },
  mounted() {
    console.log(this.$data);
  },
};
</script>