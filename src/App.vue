<template>
  <div class="app">
    <component v-bind:is="currentComponent"></component>
  </div>
</template>
<script>
import Main from './views/Main.vue';

export default {
  name: 'app',
  components: {
    mainPage: Main,
  },
  data() {
    return {};
  },
  computed: {
    currentComponent() {
      return 'mainPage';
    },
  },
};
</script>

<style lang="scss">
@import './styles/default';

.app {
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>>
