import axios from 'axios'
import config from '../../config'

export default{
  namespaced: true,
  state: {
    visitCount: 0
  },
  actions:{
    postContact: ({state}, formData) => {
      return new Promise((resolve, reject) => {
        if( !localStorage.getItem('token') ){
          return reject()
        }
        const header = {
          headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
          }
        }
        axios.post(config.SERVER_URL+'api/thing/social/contact', formData, header).then(res => {
          return resolve()
        }).catch(res => {
          return reject(res)
        })
      })
    },
    postComment: ({state}, formData) => {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem('token')) {
          return reject()
        }
        const header = {
          headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
          }
        }
        axios.post(config.SERVER_URL + 'api/thing/social/comment', formData, header).then(res => {
          return resolve()
        }).catch(res => {
          return reject(res)
        })
      })
    },
    incVisitThing: (context) => {
      const thing_id = context.rootState.thing.selectedDetail.data.id
      axios.post(config.SERVER_URL+'api/thing/social/visit-thing/'+thing_id)
    },
    getVisitThing: (context) => {
      const thing_id = context.rootState.thing.selectedDetail.data.id
      axios.get(config.SERVER_URL+'api/thing/social/visit-thing/'+thing_id).then(res => {
        context.state.visitCount = res.data.visit_count
      })
    }
  }
}