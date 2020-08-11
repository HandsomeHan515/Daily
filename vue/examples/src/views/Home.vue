<template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "han",
      age: 25,
      arr: [1, 2, 3],
    };
  },
  mounted() {
    console.log(this);
  },
};
</script>