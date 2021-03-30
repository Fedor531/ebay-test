<template>
  <div id="text">
    <h3>{{ text }}</h3>
    <Test />
  </div>
</template>
<script>
import Test from './components/Test.vue'

export default {
  name: 'app',
  components: {
      Test
  },
  data() {
    return {
      text: 'Hello i am test',
    };
  },
};
</script>

<style lang="scss">
#text {
  color: red;
}
</style>>
