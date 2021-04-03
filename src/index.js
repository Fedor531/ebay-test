import Vue from 'vue';
import App from './App.vue';


import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import { Swiper as SwiperClass, Autoplay } from 'swiper/swiper.esm.js'
import 'swiper/swiper-bundle.css'


SwiperClass.use([Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))

new Vue({
  el: '#app',
  render: h => h(App)
});
