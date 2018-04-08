import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 声明数据对象
const state = {
  count: 1,
  count1: 10
}
// mutations是固定的写法，意思是改变的，要改变state的数值的方法，必须写在mutations里就可以了
const mutations = {
  addCount(state, n) {
    state.count += n
  },
  reduceCount(state) {
    state.count -= 1
  },
  addCount1(state, n) {
    state.count1 += n
  },
  reduceCount1(state) {
    state.count1 -= 1
  }
}
// getter提供获取数据值
const getters = {
  count: function(state) {
    return state.count
  },
  count1: function(state) {
    return state.count1
  }
}
// actions异步修改状态,actions是可以调用Mutations里的方法的
const actions = {
  addCoun1Action(context, n) { // context 上下文对象，这里你可以理解称store本身
    context.commit('addCount1', n)
  },
  reduceCount1Action(context) {
    setTimeout(() => {
      context.commit('reduceCount1') // 体现异步效果,增加延时效果
    }, 2000)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
