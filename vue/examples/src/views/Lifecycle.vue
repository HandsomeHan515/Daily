<template>
  <div>
    <h1>This is an {{title}} page</h1>
    <button @click="handleClick">修改 title</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "lifecycle",
    };
  },
  beforeCreate() {
    console.log("before create", this.$data, this.title, this.$el);
  },
  created() {
    console.log("created", this.$data, this.title, this.$el);
  },
  beforeMount() {
    console.log("before mount", this.$data, this.title, this.$el);
  },
  mounted() {
    console.log("mount", this.$data, this.title, this.$el);
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("udpated");
  },
  beforeDestroy() {
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    handleClick() {
      this.title = this.title === "lifecycle" ? "生命周期" : "lifecycle";
    },
  },
};
</script>