<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="login">
      <RequestAccount />
      <img src="@/assets/avatar.png" alt="avatar" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        恢复密码
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="邮箱"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="email"
          required
        />
        <button>申请恢复</button>
      </form>
      <router-link
        to="/signin"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >返回登录</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import { auth } from "@/main";

export default {
  name: "Recover",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  data() {
    return {
      email: null
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;

      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              email: email
            }
          });
        })
        .catch(error => {
          alert("出现错误: " + error);
        });
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
