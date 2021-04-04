<template>
  <div class="main">
    <div class="main__left">
      <MainContent />
    </div>
    <div class="main__right">
      <MainSwiper />
    </div>
  </div>
</template>


<script>
import MainSwiper from '../components/MainSwiper.vue';
import MainContent from '../components/MainContent.vue';

export default {
  name: 'mainPage',
  components: {
    MainSwiper,
    MainContent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.main {
  position: relative;
  flex-grow: 1;
  display: flex;
  &__left {
    width: 68%;
    background-color: #659eff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__right {
    width: 32%;
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
    &__left {
      width: 100%;
      height: 68%;
    }

    &__right {
      height: 32%;
      width: 100%;
    }
  }
}
</style>