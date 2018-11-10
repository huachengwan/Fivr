import axios from 'axios'
import config from  '../../config'
import router from '../router'

export default{
  namespaced: true,
  state: {
    isLogged: !!localStorage.getItem("token"),
  },
  getters: {
    isLogged: state => { return state.isLogged}
  },
  mutations: {
    setLogged: state => {
      state.isLogged = true
    },
    setLogout: state => {
      state.isLogged = false
    },
  },
  actions: {
    tryLogin: ({state, commit, dispatch}, formData) => {
      return new Promise((resolve, reject) => {
        axios.post(config.SERVER_URL+'api/auth/login', formData).then(res => {
          localStorage.setItem('userAccount', JSON.stringify(res.data.userAccount))
          localStorage.setItem('token', res.data.token)
          commit('setLogged')
          resolve(res.data.userAccount)
        }).catch( res => {
          reject(res)
        })
      })
    },
    logout: ({state, commit}) => {
      localStorage.removeItem('userAccount')
      localStorage.removeItem('token')
      commit('setLogout')
      router.push({ name:'Home' })
    },
    signup: ({commit}, formData) => {
      return new Promise((resolve, reject) => {
        let form = new FormData()
        for(var key in formData){
          form.append(key, formData[key])
        }
        const header = {
          headers: {
            'Content-Type': 'mulitipart/form-data'
          }
        }
        axios.post(config.SERVER_URL+'api/auth/signup', form, header).then(res => {
          return resolve()
        }).catch( res => {
          return reject(res)
        })
      })
    }
  }
}
