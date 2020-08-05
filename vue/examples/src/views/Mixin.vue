<template>
  <div>
    <h1>This is an {{title}} page</h1>
    <button @click="handleClick">执行方法</button>
    <div>
      <p>My name is {{name}}</p>
      <p>My age is {{age}}</p>
    </div>
  </div>
</template>

<script>
import mixin from "../mixins";

export default {
  mixins: [mixin],
  data() {
    return {
      title: "mixin",
      name: "zhang",
      age: 26,
    };
  },
  mounted() {
    console.log("I am component");
  },
  methods: {
    handleClick() {
      console.log("component", this.age);
    },
  },
};
</script>