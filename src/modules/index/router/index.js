import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('../components/main/Main')
const Resource = () => import('../components/resource/Resource')
const Me = () => import('../components/me/Me')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/resource',
    name: 'Resource',
    component: Resource
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  }
  ]
})
