<template>
  <div>
    <h1>This is a {{title}} page</h1>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email" />
    </template>
    <div style="margin: 40px;">
      <button @click="handleClick">Toggle login type</button>
    </div>
    <div>
      <button @click="handleClickShow">Toggle show</button>
    </div>
    <div v-show="show">This is v show content</div>
  </div>
</template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "key",
      loginType: "username",
      show: false,
    };
  },
  methods: {
    handleClick() {
      this.loginType = this.loginType === "username" ? "email" : "username";
    },
    handleClickShow() {
      this.show = !this.show;
    },
  },
};
</script>