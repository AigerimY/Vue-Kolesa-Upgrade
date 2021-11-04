import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      name: String,
      score: 0,
      avatarUrl: '',
    },
  },
  mutations: {
    updateUserData(state, response) {
      state.userData = response;
    },
    withdrawCost(state, sum) {
      state.userData.score -= sum;
    },
  },
  actions: {
    updateUserData({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data').then(({ data }) => {
        commit('updateUserData', data);
      });
    },
  },
});
