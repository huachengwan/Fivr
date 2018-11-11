import axios from "axios";
import config from "../../config";

export default{
  namespaced: true,
  state: {
    baseDatas: {
      categories: [],
      types: [],
      priceTypes: [],
      cities: [],
    },
    allCategories: [],
    allCities: [],
    allTypes: [],
    listCreatedBy: [],
    listRecommended: [],
    searchParams: {
      keyword: '',
      category_id:'',
      city_id: '',
      type_id:'',
    },
    listSearched: [],
    selectedDetail: {
      data: null,
      contactable: 'none',
      commentable: 'none'
    },
  },
  actions: {
    getBaseDatas: ({state}) => {
      axios.get(config.SERVER_URL+'api/thing/setting/category').then(res => {
        const list = res.data
        state.baseDatas.categories = []
        for (let item of list){
          state.baseDatas.categories.push({text: item.name, value: item.id})
        }
      })
      axios.get(config.SERVER_URL+'api/thing/setting/type').then(res => {
        const list = res.data
        state.baseDatas.types = []
        for (let item of list){
          state.baseDatas.types.push({text: item.name, value: item.id})
        }
      })
      axios.get(config.SERVER_URL+'api/thing/setting/price-type').then(res => {
        const list = res.data
        state.baseDatas.priceTypes = []
        for (let item of list){
          state.baseDatas.priceTypes.push({text: item.name, value: item.id})
        }
      })
      axios.get(config.SERVER_URL+'api/thing/setting/city').then(res => {
        const list = res.data
        state.baseDatas.cities = []
        for (let item of list){
          state.baseDatas.cities.push({text: item.name, value: item.id})
        }
      })
    },
    listAllCategories: ({state}) => {
      return new Promise((resolve, reject) => {
        axios.get(config.SERVER_URL+'api/thing/category/all').then(res => {
          let list = res.data
          state.allCategories = list
          return resolve(list)
        }).catch( res => {
          return reject(res)
        })
      })
    },
    listAllCities: ({state}) => {
      return new Promise((resolve, reject) => {
        axios.get(config.SERVER_URL+'api/thing/city/all').then(res => {
          let list = res.data
          state.allCities = list
          if (state.searchParams.city_id == '' && state.allCities.length){
            state.searchParams.city_id = list[0]['id']
          }
          return resolve(list)
        }).catch( res => {
          return reject(res)
        })
      })
    },
    listAllTypes: ({state}) => {
      return new Promise((resolve, reject) => {
        axios.get(config.SERVER_URL+'api/thing/setting/type').then(res => {
          let list = res.data
          state.allTypes = list
          return resolve(list)
        }).catch( res => {
          return reject(res)
        })
      })
    },
    listCreatedBy: ({state}) => {
      return new Promise((resolve, reject) => {
        if( !localStorage.getItem('token') ){
          return reject()
        }
        const header = {
          headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
          }
        }
        axios.get(config.SERVER_URL+'api/thing/list/created-by',header).then(res => {
          let list = res.data
          for(let item of list) {
            item['main_image__path'] = config.SERVER_URL + 'media/' + item['main_image__path']
          }
          state.listCreatedBy = list
          return resolve()
        }).catch(res => {
          return reject(res)
        })
      })
    },
    listRecommended: ({state}) => {
      axios.get(config.SERVER_URL+'api/thing/list/recommended').then(res => {
        let list = res.data
        for(let item of list){
          item['main_image__path'] = config.SERVER_URL+'media/'+item['main_image__path']
        }

        state.listRecommended = list
      })
    },
    getDetail: ({state}, id) => {
      return new Promise((resolve, reject) => {
        let header = {}
        if( localStorage.getItem('token') ){
          header = {
            headers:{
              Authorization: 'Token ' + localStorage.getItem('token')
            }
          }
        }
        axios.get(config.SERVER_URL+'api/thing/'+id, header).then(res => {
          // pre-process for image path
          let data = res.data.data
          data.main_image__path = config.SERVER_URL+'media/'+data.main_image__path
          for(let i in data.additional_image_paths){
             data.additional_image_paths[i] = config.SERVER_URL+'media/'+data.additional_image_paths[i]
          }
          for(let i in data.comments){
            data.comments[i]['commentor.photo'] = config.SERVER_URL+'media/'+data.comments[i]['commentor.photo']
          }

          state.selectedDetail = res.data
          return resolve()
        }).catch(res => {
          return reject()
        })
      })
    },
    post: ({commit}, formData) => {
      return new Promise((resolve, reject) => {
        let form = new FormData();
        for( var key in formData){
          if (key == 'additional_image_files'){
            for (var image_key in formData['additional_image_files']){
              form.append('additional_image_files',formData['additional_image_files'][image_key]['image_file'])
            }
            continue
          }
          form.append(key, formData[key])
        }
        const header = {
          headers: {
            Authorization: 'Token ' + localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data'
          }
        }

        axios.post(config.SERVER_URL+'api/thing/', form, header).then(res => {
          return resolve()
        }).catch(res => {
          return reject(res)
        })
      })
    },
    listSearched: ({state}) => {
      return new Promise((resolve, reject) => {
        let header = {}
        if (localStorage.getItem('token')) {
          header = {
            headers: {
              Authorization: 'Token ' + localStorage.getItem('token')
            }
          }
        }

        const data = state.searchParams
        if(data.city_id=='')
          return reject()

        axios.post(config.SERVER_URL + 'api/thing/list/search', data, header).then(res => {
          let list = res.data
          for(let item of list){
            item['main_image__path'] = config.SERVER_URL+'media/'+item['main_image__path']
          }
          state.listSearched = list
          return resolve()
        }).catch( res => {
          return reject()
        })
      })
    },

  }
}
