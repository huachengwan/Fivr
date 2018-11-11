import Vue from 'vue'
import Vuex from 'vuex'
//import VuexPersist from 'vuex-persist'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import auth from './auth'
import thing from './thing'
import config from './config'
import social from './social'

// const vuexPersist = new VuexPersist({
//   key: 'blu-ui',
//   storage: localStorage,
// })
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: auth,
    config: config,
    thing: thing,
    social: social
  },
  plugins: [
    //vuexPersist.plugin,
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, {expires: 3, secure: true}),
        removeItem: key => Cookies.remove(key),
      }
    })
  ]
})
export default store
