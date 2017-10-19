import Vue from 'vue'
import Router from 'vue-router'
import LoginOne from '../components/loginOne/LoginOne'
import LoginTwo from '../components/loginTwo/LoginTwo'

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
