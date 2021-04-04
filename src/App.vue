<template>
  <div class="app">
    <transition name="fade" mode="out-in">
      <component v-bind:is="currentComponent"></component>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Main from './views/Main.vue';
import Questions from './views/Questions.vue';

export default {
  name: 'app',
  components: {
    mainPage: Main,
    questionsPage: Questions,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['pages', 'activePage']),
    currentComponent() {
      return this.pages[this.activePage];
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
