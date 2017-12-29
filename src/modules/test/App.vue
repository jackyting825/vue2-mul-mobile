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
// 引入mui的css,目前会导致build的时候编译无法通过
// import '@/assets/css/mui.css'
import HeaderTop from '@components/Header'
import Hello from '@components/Hello'
import axios from 'axios'
import testImgURL from '../../../static/images/test/test.png'

import {
  szlngURL
} from '../../api/index'

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
      img: testImgURL
    }
  },
  mounted() {
    this.testRequest()
  },
  components: {
    HeaderTop,
    Hello
  },
  methods: {
    testRequest: function() {
      axios.post(szlngURL, {
        'app_key': '41dad0914f72f5f6bda0bd77871e59b8',
        'app_secret': 'dca76aaf60bf666e4346d7bd233a7d7d',
        'method': 'mobBizAction.getUserIndexList',
        'access_token': '37c48ef9bffdb0f6fd438fd4471797f1'
      })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
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
