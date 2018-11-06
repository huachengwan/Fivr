import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import auth from './auth'
import thing from './thing'
import config from './config'

const vuexPersist = new VuexPersist({
  key: 'blu-ui',
  storage: localStorage,
})
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: auth,
    config: config,
    thing: thing,
  },
  plugins: [
    vuexPersist.plugin,
  ]
})
export default store
