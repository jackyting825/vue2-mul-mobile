import Vue from 'vue'
import Router from 'vue-router'
const LoginOne = () => import('../components/loginOne/LoginOne')
const LoginTwo = () => import('../components/loginTwo/LoginTwo')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'LoginOne',
    component: LoginOne
  },
  {
    path: '/loginTwo',
    name: 'LoginTwo',
    component: LoginTwo
  }
  ]
})
