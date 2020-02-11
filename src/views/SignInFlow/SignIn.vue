<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="login">
      <RequestAccount />
      <img src="@/assets/avatar.png" alt="avatar" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        登录博客后台
      </h4>
      <input
        type="text"
        placeholder="用户名"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <input
        type="password"
        placeholder="密码"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <button>登录</button>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >重置密码</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 300px;
}

img {
  margin-bottom: 10px;
}
</style>
