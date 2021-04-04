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
          title: 'Вопрос категории про отдых и увлечения',
          anwser: [
            { id: 1, title: 'Машина для хот-догов', value: 'auto' },
            { id: 2, title: ' Новые детали для тюнинга авто', value: 'detail' },
            { id: 3, title: '  Велосипеды всей семье', value: 'baik' },
          ],
        },
        {
          id: 2,
          title: 'Вопрос про природу',
          anwser: [
            { id: 1, title: 'Отдых и веселье', value: 'auto' },
            { id: 2, title: 'Футбол', value: 'detail' },
            { id: 3, title: 'Велосипеды всей семье', value: 'baik' },
          ],
        },
        {
          id: 3,
          title: 'Вопрос категории про отдых и увлечения',
          anwser: [
            { id: 1, title: 'Машина для хот-догов', value: 'auto' },
            { id: 2, title: 'Новые детали для тюнинга авто', value: 'detail' },
            { id: 3, title: 'Велосипеды всей семье', value: 'baik' },
          ],
        },
      ],
      imgArray1: [
        {
          id: 1,
          img: 'bus.svg',
          styleImg: {
            width: '70%',
            height: ' 63%',
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
          },
          backgroundColor: '#F9E377',
        },
        {
          id: 2,
          img: 'gamepad2.svg',
          styleImg: {
            width: '57%',
            height: ' 53%',
          },
          backgroundColor: '#CAE53C',
        },
        {
          id: 3,
          img: 'bike.svg',
          styleImg: {
            width: '75%',
            height: ' 70%',
          },
          backgroundColor: '#EBF86E',
        },
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