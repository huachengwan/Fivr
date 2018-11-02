export default{
  namespaced: true,
  state: {
    layout: 'GuestLayout',
    pageTitle: 'Similar site like Fiverr'
  },
  mutations: {
    setLayout: (state, layout) => {
      state.layout = layout
    },
    setPageTitle: ({commit}, pageTitle) => {
      state.pageTitle = pageTitle
    }
  },
  actions: {
    setLayout: ({commit}, layout) => {
      commit('setLayout', layout)
    },
    setPageTitle: ({commit}, pageTitle) => {
      commit('setPageTitle', pageTitle)
    }
  }
}
