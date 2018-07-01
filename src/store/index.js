import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

// app全局状态
export default new Vuex.Store({
  state: {
  },
  mutations: {
    merge(state, payload) {
      Object.assign(state, payload);
    },
  },
  modules,
}); // eslint-disable-line
