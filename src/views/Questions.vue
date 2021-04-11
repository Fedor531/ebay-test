<template>
  <div class="questions">
    <div class="questions__left">
      <QuestionBlock :questions="questions" />
    </div>
    <div class="questions__right">
      <div class="questions-images">
        <ImageBlock :imgArray="imgArray1" />
        <ImageBlock :imgArray="imgArray2" />
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import ImageBlock from '../components/ImageBlock.vue';
import QuestionBlock from '../components/QuestionBlock.vue';

export default {
  name: 'questionsPage',

  components: {
    ImageBlock,
    QuestionBlock,
  },

  data() {
    return {
      questions: [],
      imgArray1: [
        {
          id: 1,
          img: 'bus.svg',
          styleImg: {
            width: '70%',
            height: ' 63%',
            animation: 'appearanceLeft 2s ease normal',
          },
          backgroundColor: '#FDF4BA',
        },
      ],
      imgArray2: [
        {
          id: 1,
          img: 'wheel.svg',
          styleImg: {
            width: '70%',
            height: '76%',
            animation: 'disk 1s .3s ease normal forwards',
            transform: 'scale(0) rotate(720deg)',
          },
          backgroundColor: '#F9E377',
        },
        {
          id: 2,
          img: 'gamepad2.svg',
          styleImg: {
            width: '57%',
            height: ' 53%',
            animation: 'appearanceTop 1s .6s ease normal forwards',
            top: '-100%',
          },
          backgroundColor: '#CAE53C',
        },
        {
          id: 3,
          img: 'bike.svg',
          styleImg: {
            width: '75%',
            height: ' 70%',
            animation: 'appearanceLeft 1s .9s ease normal forwards',
            right: '100%',
          },
          backgroundColor: '#EBF86E',
        },
      ],
    };
  },

  computed: {
    ...mapGetters(['getQuestions', 'getAnswers']),
  },
  created() {
    this.createQuestionsArray();
  },
  methods: {
    createQuestionsArray() {
      this.questions = this.getQuestions.map((question) => {
        const result = {
          id: +question.id_question,
          title: question.question,
        };
        const anwser = this.getAnswers
          .map((answer) => {
            return {
              id_answer: +answer.id_answer,
              title: answer.answer,
              id_question: +answer.id_question,
            };
          })
          .filter((answer) => {
            return answer.id_question === result.id;
          });
        result.anwser = anwser;
        return result;
      });
    },
  },
};
</script>

<style lang="scss">
.questions {
  flex-grow: 1;
  display: flex;
  &.fade-leave-active {
    &::after {
      background-color: #c4e5fc;
    }
  }
  &__left {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbce26;
  }
  &__right {
    width: 45%;
  }
  @media all and (max-width: 699px) {
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

.questions-images {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>