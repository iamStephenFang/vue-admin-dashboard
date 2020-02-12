<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <Notification v-if="hasText" :text="text" />
    <div class="login">
      <RequestAccount />
      <img src="@/assets/avatar.png" alt="avatar" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        登录博客后台
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="邮箱"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="密码"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="password"
          required
        />
        <button>登录</button>
      </form>
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
import Notification from "@/components/Notification";
import { auth } from "@/main";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        // eslint-disable-next-line no-unused-vars
        .then(response => {
          this.$router.replace("/");
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "您已成功登出!";
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
