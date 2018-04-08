<template>
<div class="content">
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
