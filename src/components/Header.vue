<template>
  <div id="nav" :class="{ 'nav-light': !isDarkMode, 'nav-dark': isDarkMode }">
    <div class="nav-1">
      <img src="@/assets/avatar.png" />
      <router-link
        to="/"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >主页</router-link
      >
      <router-link
        to="/manage"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >管理</router-link
      >
      <router-link
        to="/about"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >关于</router-link
      >
    </div>
    <a @click="onClick">
      登出
      <img src="@/assets/logout.svg" />
    </a>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onClick() {
      const user = auth.currentUser();

      user
        .logout()
        // eslint-disable-next-line no-unused-vars
        .then(response => {
          this.$router.push({
            name: "signin",
            params: { userLoggedOut: true }
          });
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.nav-light {
  background: $white;
}

.nav-dark {
  background: $super-dark-blue;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 15%;

  a {
    font-weight: bold;
    color: $dark-gray;
    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    margin-right: 20px;
  }

  img {
    margin-right: 20px;
    max-height: 35px;
  }
}
</style>
