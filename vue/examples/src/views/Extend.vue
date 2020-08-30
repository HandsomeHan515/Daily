<template>
  <div>this is a {{title}} page</div>
</template>
<script>
import Vue from "vue/dist/vue.esm.js";
const Profile = Vue.extend({
  data() {
    return {
      age: 26,
      name: "han",
    };
  },
  template: "<p>AGE: {{age}} NAME: {{name}}</p>",
});

// new Profile().$mount("#app");

export default {
  data() {
    return {
      title: "extend",
    };
  },
};
</script>