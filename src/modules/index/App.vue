<template>
<div id="app">
  <h1>index页面(<small><a href="./login.html">登录</a></small>)</h1>
  <button @click="testClick">测试原生传递的数据</button>
  <button @click="backto">退出到原生</button>
  <div>{{msg}}</div>
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
      title: '首页',
      msg: ''
    }
  },
  mounted() {
    console.log('mounted')
    Toast('success')
  },
  beforeCreate() {
    console.log('beforeCreate')
    let _this = this
    document.addEventListener('plusready', function() {
      let _BARCODE = 'moduleZeroPlug'
      let B = window.plus.bridge
      let moduleZeroPlug = {
        TestFunctionSyncArrayArgu: function(Argus1, Argus2, Argus3) {
          return B.execSync(_BARCODE, 'TestFunctionSyncArrayArgu', [Argus1, Argus2, Argus3])
        }
      }
      window.plus.moduleZeroPlug = moduleZeroPlug
      _this.test()
      // Android复写返回键操作
      plus.key.addEventListener('backbutton', function() {
        let currentRouteName = _this.$router.currentRoute.name
        console.log('currentRouteName=' + currentRouteName)
        if (currentRouteName === 'Resource' || currentRouteName === 'Main' || currentRouteName === 'Me') { // MyTaskList
          plus.runtime.quit()
        } else {
          // _this.$router.back(-1)
        }
      }, false)
    }, true)
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  methods: {
    backto() {
      if (plus.os.name === 'iOS') {
        let notiClass = plus.ios.importClass('NSNotificationCenter')
        notiClass.defaultCenter().postNotificationNameobject('CloseWebAPP', null)
      } else {
        window.plus.runtime.quit()
      }
    },
    testClick() {
      this.test()
    },
    test() {
      let Argus = plus.moduleZeroPlug.TestFunctionSyncArrayArgu('A', 'B', 'C')
      this.msg = '接收到' + Argus.a + '_' + Argus.b + '_' + Argus.c + '_' + Argus.d
      Toast({
        message: this.msg
      })
    },
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
