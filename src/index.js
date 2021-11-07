import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import { Swiper as SwiperClass, Autoplay } from 'swiper/js/swiper.esm.js'
import 'swiper/css/swiper.min.css'
import store from './store'


SwiperClass.use([Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(Vuex)
Vue.use(VueAxios, axios)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});
