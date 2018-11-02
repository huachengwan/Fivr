import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import auth from './auth'
import things from './things'
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
    things: things,
  },
  plugins: [
    vuexPersist.plugin,
  ]
})
export default store
