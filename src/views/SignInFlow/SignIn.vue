<template>
  <div class="container">
    <div class="login">
      <div class="request">
        想成为撰稿人？
        <router-link to="/request">申请账户</router-link>
      </div>
      <img src="@/assets/avatar.png" alt="avatar" />
      <h4>登录博客后台</h4>
      <input type="text" placeholder="用户名" />
      <input type="password" placeholder="密码" />
      <button>登录</button>
      <router-link to="/recover">重置密码</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
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

.request {
  position: absolute;
  right: 40px;
  top: 40px;

  color: rgba(255, 255, 255, 0.4);
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

  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
</style>