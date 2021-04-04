<template>
  <div class="main-content">
    <h1 class="main-content__title">
      eBay исполняется 25 лет!Проверьте, а все ли у вас сбалансировано в жизни
    </h1>
    <button class="main-content__button button-default" @click="nextPages">
      Начать тест
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['nextPages']),
  },
  mounted() {},
};
</script>

<style lang="scss">
.main-content {
  max-width: 400px;
  &__title {
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    color: #fff;
    margin-bottom: 20px;
  }
}
@media all and (max-width: 768px) {
  .main-content {
    padding: 0 16px;
    &__title {
      font-size: 24px;
      line-height: 30px;
    }
  }
}
</style>