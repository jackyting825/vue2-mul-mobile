import 'normalize.css'  // css reset
import 'mint-ui/lib/style.css'  // mint-ui css
import '../../assets/css/common.css'
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui' // mint-ui
import fastclick from 'fastclick' // 去除手机点击延迟300ms
import router from './router'
import storeConfig from './store/store'
import Navigation from 'vue-navigation'

Vue.use(Navigation, {router})
Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  router,
  storeConfig,
  el: '#app',
  template: '<App/>',
  components: { App }
})
