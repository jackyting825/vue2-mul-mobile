<template>
  <div id="app">
    <div class="header">
      <mt-header fixed title="我是主界面title"></mt-header>
    </div>
    <div class="content" >
      <router-view v-transition style="min-height:100vh"></router-view>
    </div>
    <div class="footer">
      <tab></tab>
    </div>
  </div>
</template>

<script>
import Tab from './components/tab/Tab'

import { Toast, Header } from 'mint-ui'

export default {
  name: 'app',
  components: {
    Tab,
    Header
  },
  data() {
    return {}
  },
  mounted() {
    console.log('mounted')
  },
  beforeCreate() {
    console.log('beforeCreate')
    let _this = this
    document.addEventListener(
      'plusready',
      function() {
        let _BARCODE = 'plugintest'
        let B = window.plus.bridge
        let plugintest = {
          PluginTestFunctionSyncArrayArgu: function(Argus) {
            return B.execSync(_BARCODE, 'PluginTestFunctionSyncArrayArgu', [
              Argus
            ])
          },
          PluginTestFunctionSync: function(Argus1, Argus2, Argus3, Argus4) {
            // 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果
            return B.execSync(_BARCODE, 'PluginTestFunctionSync', [
              Argus1,
              Argus2,
              Argus3,
              Argus4
            ])
          }
        }
        window.plus.plugintest = plugintest
        // Android复写返回键操作
        plus.key.addEventListener(
          'backbutton',
          function() {
            let currentRouteName = _this.$router.currentRoute.name
            console.log('currentRouteName=' + currentRouteName)
            if (
              currentRouteName === 'Resource' ||
              currentRouteName === 'Main' ||
              currentRouteName === 'Me'
            ) {
              // index
              plus.runtime.quit()
            } else {
              // _this.$router.back(-1)
            }
          },
          false
        )
      },
      true
    )
  },
  created() {},
  beforeMount() {
    console.log('beforeMount')
  },
  methods: {
    test() {
      var Argus = plus.plugintest.PluginTestFunctionSyncArrayArgu([])
      alert(Argus.a + '_' + Argus.b + '_' + Argus.c + '_' + Argus.d)
      this.msg =
        '接收到' + Argus.a + '_' + Argus.b + '_' + Argus.c + '_' + Argus.d
      Toast({
        message: this.msg
      })
    }
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
  left: 0;
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
