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
    meta: { index: 0 }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Main
  },
  {
    path: '/resource',
    name: 'Resource',
    meta: { index: 2 }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Resource
  },
  {
    path: '/me',
    name: 'Me',
    meta: { index: 3 }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Me
  },
  {
    path: '/secPage',
    name: 'secPage',
    meta: { index: 4 }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Secpage
  }
  ]
})
