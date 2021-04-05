<template>
  <div class="results">
    <div class="results__left">
      <div class="results__container">
        <h2 class="results__title">{{ title }}</h2>
        <p class="results__subtitle">{{ subtitle }}</p>
        <button
          class="results__reset button-default"
          @click="nextPage('mainPage')"
        >
          Пройти еще раз
        </button>
        <button class="results__active question-btn">{{ activeButton }}</button>
        <div class="results__to-share">
          <span class="results__to-share-title">Поделиться:</span>
          <a
            v-for="item in socials"
            :key="item.id"
            class="results__to-share-link"
            :href="item.link"
          >
            <img :src="getImgUrl(item.img)" :alt="item.alt" />
          </a>
        </div>
      </div>
    </div>
    <div class="results__right">
      <div class="results__diagram">
        <img src="../images/diagram.svg" alt="diagram" />
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  name: 'results',

  components: {},

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
    getImgUrl(pic) {
      return require(`../images/icons/${pic}`);
    },
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
  &__title {
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  &__subtitle {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  &__reset {
    width: 180px;
    margin-bottom: 10px;
    margin-right: auto;
  }
  &__active {
    width: 180px;
    margin-right: auto;
  }
  .button-default {
    font-weight: 400;
    color: #111259;
  }
  .question-btn {
    color: #111259;
  }
  &__to-share {
    margin-top: 70px;
    display: flex;
    align-items: center;
    &-title {
      margin-right: 10px;
    }
    &-link {
      width: 30px;
      height: 30px;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
  &__diagram {
    height: 64%;
    width: 100%;
    margin-left: -8%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__container {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
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
    &__container {
      padding: 0 16px;
    }
    &__title {
      margin-bottom: 5px;
      font-size: 24px;
      line-height: 30px;
    }
    &__subtitle {
      font-size: 14px;
      line-height: 20px;
    }
    &__to-share {
      margin-top: 40px;
    }
    &__diagram  {
      height: 88%;
    }
    &__right {
      height: 40%;
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>