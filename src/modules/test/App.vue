<template>
<div id="app">
  <header-top :title="pageTitle" noBackBtn="true"></header-top>
  <h1>这里是{{pageTitle}}页面(<small><a href="./index.html">首页</a>|<a href="./login.html">登录</a></small>)</h1>
  <a :href="href.url">==>{{href.name}}</a>
  <img :src="img">
  <hello></hello>
</div>
</template>

<script>
import mui from 'mui'
// 引入mui的css,目前会导致build的时候编译无法通过
// import '@/assets/css/mui.css'
import HeaderTop from '@components/Header'
import Hello from '@components/Hello'

export default {
  name: 'app',
  data() {
    return {
      pageTitle: '测试界面',
      href: {
        url: './index.html',
        name: 'index'
      },
      // 本地图片如果放在assets中,url-loader会无法识别他.会导致图片无法显示
      img: '../static/images/logo.png'
    }
  },
  mounted() {
    console.log(this.title)
    console.log(mui)
  },
  components: {
    HeaderTop,
    Hello
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
