import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from '@/views/home/Page.vue'
import Main from '@/views/main/Page.vue'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        auth: 'shouldNotAuthed',
        layout: 'guest-layout',
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      meta: {
        auth: 'shouldAuthed',
        layout: 'main-layout',
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (to.meta.auth == 'shouldAuthed' && store.getters['auth/getType'] == 'guest'){
      return next({name: 'Home'})
    }
    if (to.meta.auth == 'shouldNotAuthed' && store.getters['auth/getType'] != 'guest'){
      return next({name: 'Main'})
    }
  }

  if (to.meta.layout) {
    store.dispatch('config/setLayout', to.meta.layout)
  }
  if (to.meta.windowTitle) {
    document.title = to.meta.windowTitle
  }
  if (to.meta.pageTitle) {
    store.dispatch('config/setPageTitle', to.meta.pageTitle)
  }

  next()
})
export default router
