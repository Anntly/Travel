import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx,city) {
  //     ctx.commit('changeCity',city)
  //   }
  // },
  mutations,
  // getters: {
  //   doubleCity (state) { //类似于computed,对数据进行处理
  //     return state.city + '' + state.city;
  //   }
  // }
})

