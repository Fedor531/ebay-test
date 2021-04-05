<template>
  <div class="results">
    <div class="results__left">
      <ResultContent
        :title="title"
        :subtitle="subtitle"
        :activeButton="activeButton"
        :socials="socials"
        @toMainPage="nextPage('mainPage')"
      />
    </div>
    <div class="results__right">
      <ResultDiagram />
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';
import ResultDiagram from '../components/ResultDiagram.vue';
import ResultContent from '../components/ResultContent.vue';

export default {
  name: 'resultsPage',

  components: {
    ResultDiagram,
    ResultContent,
  },

  data() {
    return {
      title: 'Результаты вашего теста:',
      subtitle: 'Вы прошли тест и можете посмотреть на свои результаты',
      activeButton: 'Устроить шопинг',
      socials: [
        { id: 1, img: 'fb.svg', alt: 'fb', link: '/' },
        { id: 2, img: 'vk.svg', alt: 'vk', link: '/' },
        { id: 3, img: 'tw.svg', alt: 'tw', link: '/' },
        { id: 4, img: 'ok.svg', alt: 'ok', link: '/' },
      ],
    };
  },

  methods: {
    ...mapMutations(['nextPage']),
  },
};
</script>

<style lang="scss">
.results {
  flex-grow: 1;
  display: flex;
  color: #111259;
  &__left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c4e5fc;
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: #92c9ff;
  }
  @media all and (max-width: 699px) {
    flex-direction: column;
    &__left {
      width: 100%;
      height: 60%;
    }
    &__right {
      height: 40%;
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>