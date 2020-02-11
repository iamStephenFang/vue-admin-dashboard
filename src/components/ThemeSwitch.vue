<template>
  <button
    class="toggle"
    :class="{ 'light-toggle': !isDarkMode, 'dark-toggle': isDarkMode }"
    @click="toggleDarkMode"
  >
    <div
      class="toggle-switch"
      :class="{ 'toggle-left': !isDarkMode, 'toggle-right': isDarkMode }"
    >
      <div v-if="isDarkMode">
        🌞
      </div>
      <div v-else>
        🌚
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "ThemeSwitch",
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

<style scoped lang="scss">
.toggle {
  background: $black;
  border-radius: 50%;

  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  transition: all 0.5s ease;
  justify-content: center;
  align-items: center;
  outline: none;
}

.light-toggle {
  background: $black;
}

.dark-toggle {
  background: $white;
}
</style>
