import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('../components/main/Main')
const Resource = () => import('../components/resource/Resource')
const Me = () => import('../components/me/Me')
const Secpage = () => import('../components/secpage/Secpage')

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
