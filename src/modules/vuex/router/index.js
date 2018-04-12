import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main/Main'
import Resource from '../components/resource/Resource'
import Me from '../components/me/Me'
import Secpage from '../components/secpage/Secpage'

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
  },
  {
    path: '/secPage',
    name: 'secPage',
    component: Secpage
  }
  ]
})
