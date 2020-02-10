<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <div class="request" :class="{'light-request':isDarkMode,'dark-request' : !isDarkMode}">
      想成为撰稿人？
      <router-link to="/request">申请账户</router-link>
    </div>
    <div class="login">
      <img src="@/assets/avatar.png" alt="avatar" />
      <h4 :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}">登录博客后台</h4>
      <input
        type="text"
        placeholder="用户名"
        :class="{'light-field':isDarkMode,'dark-field' : !isDarkMode}"
      />
      <input
        type="password"
        placeholder="密码"
        :class="{'light-field':isDarkMode,'dark-field' : !isDarkMode}"
      />
      <button>登录</button>
      <router-link to="/recover" :class="{'light-link': isDarkMode, 'dark-link' : !isDarkMode}">重置密码</router-link>
      <button :class="'toggle'" @click="toggleDarkMode">🌗</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      isDarkMode: true
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.style.background = this.isDarkMode ? "#212c4f" : "#f0f3f5";
    }
  }
};
</script>
<style lang="scss" scoped>
.light-background {
  background-color: $light-gray;
}
.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: white;
}

.dark-text {
  color: black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(192, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 300px;
}

.request {
  position: absolute;
  right: 40px;
  top: 40px;
}

.toggle {
  background: $black;
  border-radius: 50%;

  width: 3rem;
  height: 3rem;
  position: fixed;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  transition: all 0.5s ease;
  justify-content: center;
  align-items: center;
  outline: none;
}

img {
  margin-bottom: 10px;
}

h4 {
  margin: 0;
  font-size: 25px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 50px;
  width: 100%;

  font-size: 15px;
  color: white;
  padding-left: 20px;
  margin-top: 15px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;

  height: 50px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;

  font-size: 20px;
  color: white;
}

a {
  font-size: 16px;
  line-height: 25px;
  text-align: center;

  text-decoration: none;
}
</style>