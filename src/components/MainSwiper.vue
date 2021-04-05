<template>
  <swiper class="main-swiper" ref="mainSwiper" :options="swiperOption">
    <swiper-slide class="main-swiper__image _first">
      <img src="../images/watch.svg" alt="watch" />
    </swiper-slide>
    <swiper-slide class="main-swiper__image _second">
      <img src="../images/gamepad.svg" alt="gamepad" />
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'main-swiper',

  data() {
    return {
      swiper: null,
      swiperOption: {
        direction: 'vertical',
        speed: 2000,
        loop: true,
        slidesPerView: 2,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
        },
      },
    };
  },
 /*  created() {
    if (window.innerWidth < 700) {
      this.swiperOption.direction = 'horizontal';
    } else {
      this.swiperOption.direction = 'vertical';
    }
  }, */
  mounted() {
    this.swiper = this.$refs.mainSwiper.$swiper;
  },
  beforeDestroy() {
    this.swiper.destroy();
  },
};
</script>


<style lang="scss">
.main-swiper {
  width: 100%;
  height: 100%;
  &__image {
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
</style>
