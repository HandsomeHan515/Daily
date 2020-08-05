<template>
  <div>
    <h1>This is a {{title}} page</h1>
    <a :[attrName]="href">链接</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: `component`,
      href: "https://www.baidu.com",
    };
  },
  computed: {
    attrName() {
      return "href";
    },
  },
};
</script>