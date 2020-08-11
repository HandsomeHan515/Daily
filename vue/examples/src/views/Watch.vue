<template>
  <div>
    <h1>This is a {{title}} page</h1>
    <h2>C: {{a.b.c}}</h2>
    <button @click="handleClick">修改 C</button>
    <div>
      <h2>Obj.b: {{obj.b}}</h2>
      <button @click="handleClickObj">修改 Obj</button>
    </div>

    <div>
      <h2>Name&Age {{name}} {{age}}</h2>
      <button @click="handleClickName">修改 Name Age</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "watch",
      name: "han",
      age: 25,
      a: {
        b: {
          c: "han",
        },
      },
      obj: {
        a: [1, 2, 3],
        b: "han",
      },
    };
  },
  mounted() {
    const unwatchC = this.$watch(
      "a.b.c",
      (newVal, val) => {
        console.log("newVal: %o\nval: %o", newVal, val);
      },
      {
        deep: true,
        immediate: true,
      }
    );
    // unwatchC();

    this.$watch(
      "this",
      (newVal, val) => {
        console.log("newVal: %o\nval: %o", newVal, val);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    this.$watch(
      function () {
        return this.name + this.age;
      },
      (newVal, val) => {
        console.log("newVal: %o\nval: %o", newVal, val);
      },
      {
        immediate: true,
      }
    );
  },
  methods: {
    handleClick() {
      this.a.b.c = Math.random().toFixed(2).toString();
    },
    handleClickObj() {
      this.obj.a.push(4);
    },
    handleClickName() {
      //   this.name = "zhang";
      this.age = 10;
    },
  },
};
</script>