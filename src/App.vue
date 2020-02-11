<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  }
};
</script>

<style lang="scss">
* {
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  background-color: $dark-blue;
}

h1 {
  @include heading-1;
}

h2 {
  @include heading-2;
}

h4 {
  margin: 0;
  font-size: 25px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
}

a {
  font-size: 16px;
  line-height: 25px;
  text-align: center;

  text-decoration: none;
}

p {
  @include large-text-bold($purple);
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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

/* THEME */
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

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
