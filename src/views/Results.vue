<template>
  <div class="results">
    <div class="results__left">
      <div class="results__container">
        <h2 class="results__title">{{ title }}</h2>
        <p class="results__subtitle">{{ subtitle }}</p>
        <button class="results__reset button-default">Пройти еще раз</button>
        <button class="results__active question-btn">{{ activeButton }}</button>
      </div>
    </div>
    <div class="results__right"></div>
  </div>
</template>


<script>
export default {
  name: 'results',

  components: {},

  data() {
    return {
      title: 'Результаты вашего теста:',
      subtitle: 'Вы прошли тест и можете посмотреть на свои результаты',
      activeButton: 'Устроить шопинг',
    };
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
  &__container {
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
  &__right {
    width: 50%;
    background-color: #92c9ff;
  }
  @media all and (max-width: 768px) {
    flex-direction: column;
    &__left {
      width: 100%;
      height: 50%;
    }

    &__right {
      height: 50%;
      width: 100%;
    }
  }
}

.questions-images {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>