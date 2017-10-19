<template>
<div id="app">
  <h1>index页面(<small><a href="./login.html">登录</a></small>)</h1>
  <tab></tab>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
import Hello from '@components/Hello'
import Tab from './components/tab/Tab'
import VueHead from 'vue-head'
import Vue from 'vue'
import {
  Toast
} from 'mint-ui'

Vue.use(VueHead, {
  separator: '-',
  complement: 'App'
})

export default {
  name: 'app',
  components: {
    Hello,
    Tab
  },
  data() {
    return {
      title: '首页'
    }
  },
  mounted() {
    Toast({
      message: '加载成功,我是饿了么的提示框'
    })
  },
  methods: {
    updateTitle(title) { // vue-head 更新页面的title
      let _this = this
      window.setTimeout(function() {
        _this.title = title
        _this.$emit('updateHead')
      }, 10)
    }
  },
  head: {
    title: function() {
      return {
        inner: this.title
      }
    },
    meta: [{
      name: 'viewport',
      content: 'maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0'
    }, {
      name: 'keywords',
      content: 'Genbotter'
    }]
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.k {
    display: flex;
}
</style>
