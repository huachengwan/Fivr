import axios from "axios";
import config from "../../config";

export default{
  namespaced: true,
  state: {
    allCategories: [],
    types: [],
    priceTypes: [],
    searchParams: {
      keyword: '', category_id:''
    },
    listCreatedBy: [],
    listRecommended: [],
    listSearched: [],
    oneData:null,
    oneRelation: 'none'
  },
  mutations: {
    setSearchParamsByText: (state, keyword) => {
      state.searchParams['keyword'] = keyword
    },
    listAllCategories: (state, list) => {
      state.allCategories = list
    },
    listTypes: (state, list) => {
      state.types = list
    },
    listPriceTypes: (state, list) => {
      state.priceTypes = list
    },
    setSearchedThings: (state, list) => {
      state.searchedThings = list
    },
    listCreatedBy: (state, list) => {
      let list0 = []
      for(let item of list){
        if(item['main_image__name']=='')
          item['main_image__name'] = config.SERVER_URL+'media/project_img/__no_image__.jpg'
        else
          item['main_image__name'] = config.SERVER_URL+'media/'+item['main_image__name']
        list0.push(item)
      }

      state.listCreatedBy = list
    },
    listRecommended: (state, list) => {
      let list0 = []
      for(let item of list){
        if(item['main_image__name']=='')
          item['main_image__name'] = config.SERVER_URL+'media/project_img/__no_image__.jpg'
        else
          item['main_image__name'] = config.SERVER_URL+'media/'+item['main_image__name']
        list0.push(item)
      }

      state.listRecommended = list0
    },
    listSearched: (state, list) => {
      let list0 = []
      for(let item of list){
        if(item['main_image__name']=='')
          item['main_image__name'] = config.SERVER_URL+'media/project_img/__no_image__.jpg'
        else
          item['main_image__name'] = config.SERVER_URL+'media/'+item['main_image__name']
        list0.push(item)
      }

      state.listSearched = list0
    },
  },
  actions: {
    listAllCategories: ({commit}) => {
      return new Promise((resolve, reject) => {
        axios.get(config.SERVER_URL+'api/thing/category/all').then(res => {
          let list = res.data
          commit('listAllCategories', list)
          resolve(list)
        }).catch( res => {
          reject(res)
        })
      })
    },
    listTypes: ({commit}) => {
      axios.get(config.SERVER_URL+'api/thing/setting/type').then(res => {
        commit('listTypes', res.data)
      })
    },
    listPriceTypes: ({commit}) => {
      axios.get(config.SERVER_URL+'api/thing/setting/price-type').then(res => {
        commit('listPriceTypes', res.data)
      })
    },
    post: ({commit}, {token, formData}) => {
      let form = new FormData();
      for( var key in formData){
        form.append(key, formData[key])
      }
      form.append('image_file0',formData.image_file)
      const header = {
        headers: {
          Authorization: 'Token ' + token,
          'Content-Type': 'multipart/form-data'
        }
      }
      return new Promise((resolve, reject) => {
        axios.post(config.SERVER_URL+'api/thing/', form, header).then(res => {
          resolve()
        }).catch(res => {
          reject(res)
        })
      })
    },
    listCreatedBy: ({commit}, {token}) => {
      const header = {
        headers: {
          Authorization: 'Token ' + token
        }
      }
      return new Promise((resolve, reject) => {
        axios.get(config.SERVER_URL+'api/thing/list/created-by',header).then(res => {
          commit('listCreatedBy', res.data)
          resolve()
        }).catch(res => {
          reject(res)
        })
      })
    },
    listRecommended: ({commit}) => {
      axios.get(config.SERVER_URL+'api/thing/list/recommended').then(res => {
        commit('listRecommended', res.data)
      })
    },
    listSearched: (context) => {
      let header = {}
      if(context.rootGetters['auth/getType'] != 'guest'){
        header = {
          headers:{
            Authorization: 'Token ' + context.rootGetters['auth/getToken']
          }
        }
      }
      var data = {
        keyword:context.state.searchParams.keyword,
        category_id:context.state.searchParams.category_id,
      }

      axios.post(config.SERVER_URL+'api/thing/list/search', data, header).then(res => {
        context.commit('listSearched', res.data)
      })
    },
    setSearchParamsByText: ({commit}, keyword) => {
      commit('setSearchParamsByText', keyword)
    },
    getDetail: (context, id) => {
      let header = {}
      if(context.rootGetters['auth/getType'] != 'guest'){
        header = {
          headers:{
            Authorization: 'Token ' + context.rootGetters['auth/getToken']
          }
        }
      }
      axios.get(config.SERVER_URL+'api/thing/'+id,header).then(res => {
        context.state.oneData = res.data.data
        context.state.oneRelation = res.data.relation
      }).catch(res => {
        console.log('aaa')
        context.state.oneData = null
        context.state.oneRelation = 'none'
      })
    }
  }
}
