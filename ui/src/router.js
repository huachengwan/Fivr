import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from '@/views/home/Page.vue'
import Main from '@/views/main/Page.vue'
import Search from '@/views/search/Page.vue'
import Post from '@/views/post/Page.vue'
import Detail from '@/views/detail/Page.vue'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      exact: true,
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
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      meta: {
        auth: 'shouldAuthed',
        layout: 'main-layout',
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem('userAccount')
  if (to.meta.auth) {
    if (to.meta.auth == 'shouldAuthed' && !isLogged){
      return next({name: 'Home'})
    }
    if (to.meta.auth == 'shouldNotAuthed' && isLogged){
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
