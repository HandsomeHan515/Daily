<template>
  <div>
    <h1>This is a {{title}} page</h1>
    <div>
      <h2>Message: {{message}}</h2>
      <button @click="handleClick">更改Message</button>
    </div>
    <h2>Reverse Message: {{reverseMessage()}}</h2>

    <div>
      <h2>My full name is {{fullName}}</h2>
      <button @click="handleChange">修改 fullname computed's setter</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "computed",
      message: "hello world",
      firstName: "shuai",
      lastName: "han",
    };
  },
  computed: {
    // 只在相关响应式依赖发生改变时它们才会重新求值
    // reverseMessage() {
    //   return this.message.split("").reverse().join("");
    // },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(val) {
        const names = val.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
      watch: {
        // 支持异步，即若有 http 请求可放倒 watch 中
        // firstName: function (val) {
        //   this.fullName = val + " " + this.lastName;
        // },
        // lastName: function (val) {
        //   this.fullName = this.firstName + " " + val;
        // },
      },
    },
  },
  methods: {
    reverseMessage() {
      return this.message.split("").reverse().join("");
    },
    handleClick() {
      this.message = Math.random().toFixed(2).toString();
    },
    handleChange() {
      this.fullName =
        this.fullName === "shuai han" ? "liming zhang" : "shuai han";
    },
  },
};
</script>