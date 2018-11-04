import axios from "axios";
import config from "../../config";

export default{
  namespaced: true,
  state: {
    allCategories : []
  },
  mutations: {
    listAllCategories: (state, list) => {
      state.allCategories = list
    }
  },
  actions: {
    listAllCategories: ({commit}) => {
      // axios.post(config.SERVER_URL+'api/auth/login', formData).then(res => {
      //   let list = res.data.list
      //   commit('listAllCategories', list)
      // })

      let list = [
        {
          icon: 'ad', name: 'Graphics & Design', id: '10'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '11'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '12'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '13'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '14'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '15'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '16'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '17'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '10'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '11'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '12'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '13'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '14'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '15'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '16'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '17'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '10'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '11'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '12'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '13'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '14'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '15'
        },
        {
          icon: 'ad', name: 'Graphics & Design', id: '16'
        },
        {
          icon: 'address-book', name: 'Digital Marketing', id: '17'
        },
      ]
      commit('listAllCategories', list)
    }
  }
}
