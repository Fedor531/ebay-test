<template>
  <div class="main">
    <div class="main__left">
      <MainContent :title="title" :button="button" @nextPage="next" />
    </div>
    <div class="main__right">
      <MainSwiper />
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';
import MainSwiper from '../components/MainSwiper.vue';
import MainContent from '../components/MainContent.vue';

export default {
  name: 'mainPage',
  components: {
    MainSwiper,
    MainContent,
  },
  data() {
    return {
      title:
        'eBay исполняется 25 лет! Проверьте, а все ли у вас сбалансировано в жизни',
      button: 'Начать тест',
      activeClass: '',
    };
  },
  methods: {
    ...mapMutations(['nextPage']),
    next() {
      this.nextPage('questionsPage');
    },
  },
};
</script>

<style lang="scss">
.main {
  flex-grow: 1;
  display: flex;
  position: relative;
  &.fade-leave-active {
    &::after {
      background-color: #fbce26;
    }
  }
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

  @media all and (max-width: 699px) {
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