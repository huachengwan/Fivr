import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/main.stylus'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#e51b17',
    accent: '#333',
    info: '#c8ae97',
    background: '#eee',
  },
  options: {
    customProperties: true
  }
})
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
