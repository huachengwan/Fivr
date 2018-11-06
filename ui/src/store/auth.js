import axios from 'axios'
import config from  '../../config'


export default{
  namespaced: true,
  state: {
  },
  getters: {
    getAccount: state => {
      return localStorage.getItem('userAccount')?localStorage.getItem('userAccount'):null
    },
    getType: state => {
      if (localStorage.getItem('userAccount')) {
        const userType = localStorage.getItem('accountType')
        return userType
      }else{
        return 'guest'
      }
    },
    getToken: state => {
      return localStorage.getItem('token')
    }
  },
  mutations: {
    setLogged: (state, {userAccount, token}) => {
      localStorage.setItem('accountType', 'customer')
      localStorage.setItem('userAccount', userAccount)
      localStorage.setItem('token', token)
    },
    logout: state => {
      localStorage.clear()
    }
  },
  actions: {
    tryLogin: ({commit, dispatch}, formData) => {
      return new Promise((resolve, reject) => {
        axios.post(config.SERVER_URL+'api/auth/login', formData).then(res => {
          commit('setLogged', res.data)
          resolve(res.data.userAccount)
        }).catch( res => {
          reject(res)
        })
      })
    },
    logout: ({commit}) => {
      commit('logout')
    },
    signup: ({commit}, formData) => {
      return new Promise((resolve, reject) => {
        axios.post(config.SERVER_URL+'api/auth/signup', formData).then(res => {
          resolve()
        }).catch( res => {
          reject(res)
        })
      })
    }
  }
}
