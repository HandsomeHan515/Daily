<template>
  <div>
    <h1>This is a {{title}} page</h1>
    <button @click="handleClick(1)">keep a</button>
    <button @click="handleClick(2)">keep b</button>
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import KeepA from "../components/KeepA.vue";
import KeepB from "../components/KeepB.vue";
export default {
  components: {
    "keep-a": KeepA,
    "keep-b": KeepB,
  },
  data() {
    return {
      title: "keep alive",
      val: 1,
    };
  },
  computed: {
    currentTabComponent() {
      return this.val === 1 ? KeepA : KeepB;
    },
  },
  methods: {
    handleClick(val) {
      this.val = val;
    },
  },
};
</script>