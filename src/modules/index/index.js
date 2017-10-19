// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'  // css reset
import 'mint-ui/lib/style.css'  // mint-ui css
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui' // mint-ui
import fastclick from 'fastclick' // 去除手机点击延迟300ms
import router from './router'

Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
