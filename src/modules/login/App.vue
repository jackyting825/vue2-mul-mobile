<template>
<div id="app">
  <h1>这里是login页面(<small><a href="./index.html">index</a></small>)</h1>
  <img src="../../assets/images/logo.png">
  <tab></tab>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
import Hello from '@components/Hello'
import Tab from './components/tab/Tab'
import {
  changeURLArg
} from '@/utils/utils'

export default {
  name: 'app',
  components: {
    Hello,
    Tab
  },
  mounted: function() {
    console.log(window.location.href)
    let val = changeURLArg(window.location.href, 'page', 1)
    console.log(val)
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
</style>
