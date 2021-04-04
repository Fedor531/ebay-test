<template>
  <transition name="fade" mode="out-in">
    <div class="questions-content" :key="currentQuestion.id">
      <h2 class="questions-content__title">
        {{ currentQuestion.title }}
      </h2>
      <div class="questions-content__btns">
        <button
          v-for="item in currentQuestion.anwser"
          :key="item.id"
          class="questions-content__btn question-btn"
          @click="answerQuestion"
        >
          {{ item.title }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    questions: Array,
  },
  data() {
    return {
      currentQuestion: {},
      activeQuestion: 0,
    };
  },
  created() {
    this.currentQuestion = this.questions[0];
  },
  methods: {
    ...mapMutations(['nextPage']),

    answerQuestion() {
      if (this.questions.length === this.currentQuestion.id) {
        // Запрос к бд
        this.nextPage();
      } else {
        // Запрос к бд
        this.activeQuestion += 1;
        this.currentQuestion = this.questions[this.activeQuestion];
      }
    },
  },
};
</script>

<style lang="scss">
.questions-content {
  color: #365001;
  padding: 16px;
  min-width: 83%;
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