import 'normalize.css' // css reset
import 'mint-ui/lib/style.css' // mint-ui css
import '../../assets/css/common.css'
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui' // mint-ui
import fastclick from 'fastclick' // 去除手机点击延迟300ms
import router from './router'
import storeConfig from './store/store'
// import VConsole from 'vconsole'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

Vue.use(vueg, router) // ←注意这一句应该在router实例化之后

Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(MintUI)
// window.vConsole = new VConsole()
/* eslint-disable no-new */
new Vue({
  router,
  storeConfig,
  el: '#app',
  template: '<App/>',
  components: { App }
})
