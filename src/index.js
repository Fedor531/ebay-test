import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import { Swiper as SwiperClass, Autoplay } from 'swiper/swiper.esm.js'
import 'swiper/swiper-bundle.css'
import store from './store'


SwiperClass.use([Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(Vuex)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});
