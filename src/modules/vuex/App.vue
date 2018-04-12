<template>
<div id="app">
  <div class="header">
    <mt-header fixed title="我是主界面title"></mt-header>
  </div>
  <div class="content transition-wrapper">
    <transition :name="transitionName">
        <navigation>
          <router-view></router-view>
        </navigation>
    </transition>
  </div>
  <div class="footer">
    <tab></tab>
  </div>
</div>
</template>

<script>
import Tab from './components/tab/Tab'

import {
  Toast,
  Header
} from 'mint-ui'

export default {
  name: 'app',
  components: {
    Tab,
    Header
  },
  data() {
    return {
      transitionName: 'fade'
    }
  },
  mounted() {
    console.log('mounted')
  },
  beforeCreate() {
    console.log('beforeCreate')
    let _this = this
    document.addEventListener('plusready', function() {
      let _BARCODE = 'vuexplugin'
      let B = window.plus.bridge
      let vuexplugin = {
        PluginTestFunctionSyncArrayArgu: function(Argus) {
          return B.execSync(_BARCODE, 'PluginTestFunctionSyncArrayArgu', [Argus])
        },
        PluginTestFunctionSync: function(Argus1, Argus2, Argus3, Argus4) {
          // 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果
          return B.execSync(_BARCODE, 'PluginTestFunctionSync', [Argus1, Argus2, Argus3, Argus4])
        }
      }
      window.plus.vuexplugin = vuexplugin
      // Android复写返回键操作
      plus.key.addEventListener('backbutton', function() {
        let currentRouteName = _this.$router.currentRoute.name
        console.log('currentRouteName=' + currentRouteName)
        if (currentRouteName === 'Resource' || currentRouteName === 'Main' || currentRouteName === 'Me') { // index
          plus.runtime.quit()
        } else {
          // _this.$router.back(-1)
        }
      }, false)
    }, true)
  },
  created() {
    console.log('created')
    Toast('加载成功')
    // bind event
    this.$navigation.on('forward', (to, from) => {
      console.log('forward to', to, 'from ', from)
      this.transitionName = 'slide-left'
    })
    this.$navigation.on('back', (to, from) => {
      console.log('back to', to, 'from ', from)
      this.transitionName = 'slide-right'
    })
    this.$navigation.on('replace', (to, from) => {
      console.log('replace to', to, 'from ', from)
    })
    this.$navigation.on('refresh', (to, from) => {
      console.log('refresh to', to, 'from ', from)
    })
    this.$navigation.on('reset', () => {
      console.log('reset')
    })
    // and use [once, off] methods
    this.$navigation.once('forward', () => {
      console.log('appear once')
    })
    const off = () => {
      console.log('will not appear')
    }
    this.$navigation.on('forward', off)
    this.$navigation.off('forward', off)
  },
  beforeMount() {
    console.log('beforeMount')
  },
  methods: {

  }
}
</script>

<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.header {
    /* 我们希望 header 采用固定的高度，只占用必须的空间 */
    /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
    position: absolute;
    top: 0;
    left: 0
}
.mint-header {
    line-height: 0.53rem !important;
}
.content {
  margin-top: 0.53rem;
}

.footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
}
</style>
