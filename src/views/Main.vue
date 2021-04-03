<template>
  <div class="main">
    <div class="main__left">
      <div class="main__left-container">
        <h1 class="main__left-title">
          eBay исполняется 25 лет!Проверьте, а все ли у вас сбалансировано в
          жизни
        </h1>
        <button class="main__left-button button-default">Начать тест</button>
      </div>
    </div>
    <div class="main__right">
      <div class="main__right-image _first">
        <img src="../images/watch.svg" alt="gamepad" />
      </div>
      <div class="main__right-image _second">
        <img src="../images/gamepad.svg" alt="watch" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.main {
  flex-grow: 1;
  display: flex;
  &__left {
    width: 68%;
    background-color: #659eff;
    display: flex;
    align-items: center;
    justify-content: center;
    &-container {
      max-width: 400px;
    }
    &-title {
      font-weight: 900;
      font-size: 32px;
      line-height: 40px;
      color: #fff;
      margin-bottom: 20px;
    }
  }
  &__right {
    width: 32%;
    display: flex;
    flex-direction: column;
    &-image {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      &._first {
        background-color: #3615f2;
        img {
          height: 75.6%;
          width: 45.87%;
        }
      }
      &._second {
        background-color: #3261f7;
        img {
          height: 41.4%;
          width: 58.2%;
        }
      }
    }
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
    &__left {
      width: 100%;
      height: 68%;
      background-color: #659eff;
      &-container {
        padding: 0 15px;
      }
      &-title {
        font-size: 24px;
        line-height: 30px;
      }
    }

    &__right {
      width: 100%;
      height: 32%;
      flex-direction: row;
      &-image {
        height: 100%;
      }
    }
  }
}
</style>