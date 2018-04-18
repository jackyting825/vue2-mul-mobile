// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.config.productionTip = false

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    'zh_CN': require('../../assets/lang/zh'),   // 中文语言包
    'en_US': require('../../assets/lang/en')    // 英文语言包
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  i18n,
  components: { App }
})
