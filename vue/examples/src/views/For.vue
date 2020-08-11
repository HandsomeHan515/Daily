<template>
  <div>
    <h1>This is a {{title}} page</h1>
    <render></render>
  </div>
</template>
<script>
import Render from "../components/Render";
import { compile } from "vue-template-compiler";
const a = compile(`<div v-if="false" v-for="item in 10">{{item}}</div>`);
console.log(a.ast);
const fn = new Function(a.render);
console.log(fn);
export default {
  components: { render: Render },
  data() {
    return {
      title: "for",
    };
  },
  methods: {},
};
</script>