import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/main.stylus'
import 'swiper/dist/css/swiper.css'
import VueWysiwyg from 'vue-wysiwyg'
import "vue-wysiwyg/dist/vueWysiwyg.css"
import StarRating from 'vue-star-rating'
import GSignInButton from 'vue-google-signin-button'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#e51b17',
    accent: '#888',
    info: '#c8ae97',
    background: '#eee',
  },
  options: {
    customProperties: true
  }
})
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios,axios)
Vue.use(VueWysiwyg)
Vue.component('star-rating', StarRating)
Vue.use(GSignInButton)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
