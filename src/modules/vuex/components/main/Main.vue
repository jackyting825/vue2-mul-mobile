<template>
<div class="content transition-wrapper">
  <div class="top">
    <p>
      主页面
    </p>
    <p>
      store.count值:{{$store.state.count}}
      <button @click="$store.commit('addCount',10)">count增加10</button>
      <button @click="$store.commit('reduceCount')">count减少1</button>
    </p>
    <p>
      store.count1值:{{$store.state.count1}}
      <button @click="addCoun1Action(5)">增加5</button>
      <button @click="reduceCount1Action">延迟2秒异步减少1</button>
    </p>
    <br/>
    <router-link tag="div" to="/secPage">
      <a href="javascript:void(0)">进入下一级页面</a>
    </router-link>
    <transition :name="transitionName">
      <navigation>
        <router-view/>
      </navigation>
    </transition>
  </div>
  <div class="bottom">
  </div>
</div>
</template>

<script>
import Hello from '@components/Hello'
import logo1 from '~/images/index/logo1.png'
import store from '../../store/store'
import {
  mapMutations,
  mapActions
} from 'vuex'

export default {
  store,
  components: {
    Hello
  },
  data() {
    return {
      imageUrl: logo1,
      transitionName: 'fade'
    }
  },
  created() {},
  methods: {
    ...mapMutations([
      'addCount', 'reduceCount'
    ]),
    ...mapActions([
      'addCoun1Action', 'reduceCount1Action'
    ]),
    test() {
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
}
.top {
    text-align: center;
    flex: 1;
}
.content {
    display: flex;
    flex-direction: column;
}
</style>
