<template>
<div class="content transition-wrapper">
  <p>
    Secpage ,store里面count的值第一种方式获取:{{$store.state.count}}
  </p>
  <p>
    store里面count的值第二种方式获取:{{count}}
  </p>
  <p>
    通过mapGetters获取store里面count1的值第获取:{{count1}}
  </p>
  <p>
    通过store getter获取store里面count的值第获取:{{val}}
  </p>
  <br/>
  <p>
    <button @click="send">获取原生传递过来的信息</button>
  </p>
  <br/>
  <p>
    <button @click="send1">传递参数给原生并获取原生传送的信息</button>
  </p>
  <br/>
  <a href="javascript:void(0)" @click="goback">返回上一页</a>
</div>
</template>

<script>
import Hello from '@components/Hello'
import store from '../../store/store'
import {
  mapState,
  mapGetters
} from 'vuex'
import {
  Toast
} from 'mint-ui'

export default {
  store,
  components: {
    Hello
  },
  data() {
    return {
      val: this.$store.getters.count
    }
  },
  computed: {
    count() {
      return this.$store.state.count // 获取count值的方式1
    },
    ...mapState(['count']), // mapState获取count的值的方式2
    ...mapGetters(['count1']) // mapGetters获取count1的值
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    send1() {
      let Argus = plus.vuexplugin.PluginTestFunctionSync('A', 'B', 'C', 'D')
      console.log(Argus)
      this.msg = Argus
      Toast({
        message: this.msg
      })
    },
    send() {
      let Argus = plus.vuexplugin.PluginTestFunctionSyncArrayArgu([])
      alert(Argus.a + '_' + Argus.b + '_' + Argus.c + '_' + Argus.d)
      this.msg = '接收到' + Argus.a + '_' + Argus.b + '_' + Argus.c + '_' + Argus.d
      Toast({
        message: this.msg
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tips {
    line-height: 1.25;
    text-align: left;
    text-indent: 2em;
}
.bread {
    background: green;
}
</style>
