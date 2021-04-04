<template>
  <div class="questions">
    <div class="questions__left">
      <div class="questions-content">
        <h2 class="questions-content__title">
          {{ title }}
        </h2>
        <div class="questions-content__btns">
          <button
            v-for="item in buttons"
            :key="item.id"
            class="questions-content__btn question-btn"
          >
            {{ item.title }}
          </button>
        </div>
      </div>
    </div>
    <div class="questions__right">
 <!--      <div class="questions-images">
        <div class="questions-images__first-block">

        </div>
        <div class="questions-images__first-block">

        </div>
      </div> -->
    </div>
  </div>
</template>


<script>
export default {
  name: 'questionsPage',

  data() {
    return {
      title: 'Вопрос категории про отдых и увлечения',
      buttons: [
        { id: 1, title: 'Машина для хот-догов' },
        { id: 2, title: ' Новые детали для тюнинга авто' },
        { id: 3, title: '  Велосипеды всей семье' },
      ],
    };
  },
};
</script>

<style lang="scss">
.questions {
  flex-grow: 1;
  display: flex;
  &__left {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbce26;
  }
  &__right {
    width: 45%;
    background-color: aqua;
  }
  @media all and (max-width: 768px) {
    flex-direction: column;
    &__left {
      width: 100%;
      height: 55%;
    }

    &__right {
      height: 45%;
      width: 100%;
    }
  }
}

.questions-content {
  color: #365001;
  padding: 16px;
  &._text-white {
    color: #fff;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__btns {
    display: flex;
    flex-direction: column;
    margin-right: auto;
  }
  &__btn {
    margin-right: auto;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>