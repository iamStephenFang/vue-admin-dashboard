<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="login">
      <RequestAccount />
      <img src="@/assets/avatar.png" alt="avatar" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        申请账户
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="邮箱"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="email"
          required
        />
        <button>发送申请</button>
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
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "Request",
  components: {
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

      // Slack API logic
      let slackURL = new URL("https://slack.com/api/chat.postMessage");

      const data = {
        token: "${token}",
        channel: "vue-proj",
        text: `${email} 已发送至后台进行审核.`
      };

      slackURL.search = new URLSearchParams(data);

      fetch(slackURL)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRequestedAccount: true,
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
