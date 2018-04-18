import 'normalize.css'  // css reset
import 'mint-ui/lib/style.css'  // mint-ui css
import '../../assets/css/common.css' // 路由动画和禁止手机长按出现复制菜单
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick' // 去除手机点击延迟300ms
import router from './router'
import storeConfig from './store/store'
import Navigation from 'vue-navigation'

Vue.use(Navigation, {router})
Vue.config.productionTip = false

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  router,
  storeConfig,
  el: '#app',
  template: '<App/>',
  components: { App }
})
