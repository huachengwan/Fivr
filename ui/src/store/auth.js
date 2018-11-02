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
    }
  },
  mutations: {
    setLogged: (state, userAccount, token) => {
      if('account_type' in userAccount.more){
        localStorage.setItem('accountType', userAccount.more.account_type)
      }else{
        localStorage.setItem('accountType', 'seller')
      }
      localStorage.setItem('userAccount', userAccount)
      localStorage.setItem('token', token)
    },
    logout: state => {
      localStorage.clear()
    }
  },
  actions: {
    tryLogin: ({commit, dispatch}, formData) => {
      let axiosConfig = {
        withCredentials: true
      };
      return new Promise((resolve, reject) => {
        axios.post(config.SERVER_URL+'api/auth/login', formData).then(res => {
          commit('setLogged', res.data.userAccount, res.data.token)
          resolve(res.data.userAccount)
        }).catch( res => {
          reject(res)
        })
      })
    },
    logout: ({commit}) => {
      commit('logout')
    }
  }
}
