<template>
  <div class="container">
    <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
      关于博客
    </h3>
    <div class="cards">
      <transition appear appear-active-class="animated pulse">
        <a
          class="card card-1"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            src="@/assets/author.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Author
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            @StephenFang
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated pulse">
        <a
          class="card card-2"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            src="@/assets/IG.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Instagram
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            @iamstephenfang
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated pulse">
        <a
          class="card card-3"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            src="@/assets/github.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            GitHub
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            @iamStephenFang
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated pulse">
        <a
          class="card card-1"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            src="@/assets/twi.png"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Twitter
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            @fangxuanmiao
          </p>
        </a>
      </transition>
    </div>
    <ThemeSwitch />
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "About",
  components: {
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
  margin-left: 25px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.3s;
}
.card-3 {
  animation-delay: 0.6s;
}
.card-3 {
  animation-delay: 0.9s;
}

.light-text {
  color: white;
}

.dark-text {
  color: black;
}

.card {
  width: 100%;
  max-width: 250px;
  height: 300px;
  border-radius: 10px;
  margin: 20px;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}

h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  margin-top: 0;
}
</style>
