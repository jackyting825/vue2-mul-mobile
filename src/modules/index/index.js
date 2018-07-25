// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'  // css reset
import '../../assets/css/common.css' // 路由动画和禁止手机长按出现复制菜单
// import 'mint-ui/lib/style.css'  // mint-ui css
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick' // 去除手机点击延迟300ms
import router from './router'
import VConsole from 'vconsole'

Vue.config.productionTip = false

fastclick.attach(document.body)
window.vConsole = new VConsole()
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
