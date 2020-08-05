<template>
  <div>
    <p>
      One Child
      <button @click="handleClick">触发 Event Bus</button>
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$eventbus.$emit("increment-count", 1);
    },
  },
};
</script>