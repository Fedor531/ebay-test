<template>
  <div class="app">
    <Main />
  </div>
</template>
<script>
import Main from './views/Main.vue';

export default {
  name: 'app',
  components: {
    Main,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import './styles/default';

.app {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
</style>>
