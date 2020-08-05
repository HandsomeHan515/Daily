<template>
  <div>Two Child: {{count}}</div>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  mounted() {
    this.$eventbus.$on("increment-count", this.addCount);
  },
  beforeDestroy() {
    this.$eventbus.$off("increment-count", this.addCount);
  },
  methods: {
    addCount(val) {
      this.count += val;
    },
  },
};
</script>