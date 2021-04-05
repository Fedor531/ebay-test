<template>
  <transition name="question" mode="out-in">
    <div class="questions-content" :key="currentQuestion.id">
      <h2 class="questions-content__title">
        {{ currentQuestion.title }}
      </h2>
      <div class="questions-content__btns">
        <button
          v-for="item in currentQuestion.anwser"
          :key="item.id"
          class="questions-content__btn question-btn"
          @click="answerQuestion(item)"
        >
          {{ item.title }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

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
    ...mapActions(['ajaxPostAnswer']),

    async answerQuestion(item) {
      const formData = new FormData();
      formData.append('title', item.title);
      formData.append('value', item.value);
      if (this.questions.length === this.currentQuestion.id) {
        await this.ajaxPostAnswer(formData)
          .then((res) => {
            console.log(res);
            this.nextPage('resultsPage');
          })
          .catch((res) => {
            console.log(res);
          });
      } else {
        await this.ajaxPostAnswer(formData)
          .then((res) => {
            console.log(res);
            this.activeQuestion += 1;
            this.currentQuestion = this.questions[this.activeQuestion];
          })
          .catch((res) => {
            console.log(res);
          });
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
  padding: 0 40px;
  &._text-white {
    color: #fff;
  }
  &__title {
    font-size: 26px;
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
  @media all and (max-width: 699px) {
    padding: 0 16px;
    &__title {
      font-size: 24px;
    }
  }
}
</style>