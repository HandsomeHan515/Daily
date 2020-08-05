<template>
  <div>
    <h1>This is an {{title}} page</h1>
    <one-child></one-child>
    <two-child></two-child>
  </div>
</template>

<script>
import One from "../components/One";
import Two from "../components/Two";

export default {
  components: {
    "one-child": One,
    "two-child": Two,
  },
  data() {
    return {
      title: "event bus",
    };
  },
};
</script>