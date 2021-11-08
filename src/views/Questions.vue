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
        questions: [
            {
                id: 1,
                title: '1 Вопрос',
                answer: [
                    {
                        id: 1,
                        title: '1 Ответ'
                    },
                    {
                        id: 2,
                        title: '2 Ответ'
                    },
                    {
                        id: 3,
                        title: '3 Ответ'
                    }
                ]
            },
            {
                id: 2,
                title: '2 Вопрос',
                answer: [
                    {
                        id: 1,
                        title: '2 Ответ'
                    },
                    {
                        id: 2,
                        title: '2 Ответ'
                    },
                    {
                        id: 3,
                        title: '2 Ответ'
                    }
                ]
            },
            {
                id: 3,
                title: '3 Вопрос',
                answer: [
                    {
                        id: 1,
                        title: '3 Ответ'
                    },
                    {
                        id: 2,
                        title: '3 Ответ'
                    },
                    {
                        id: 3,
                        title: '3 Ответ'
                    }
                ]
            }
        ],
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

  methods: {
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
