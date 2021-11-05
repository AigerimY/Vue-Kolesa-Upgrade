import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      name: '',
      score: 0,
      avatarUrl: '',
    },
  },
  mutations: {
    updateUserData(state, response) {
      if (response.name) {
        state.userData.name = response.name;
      }
      if (response.score) {
        state.userData.score = response.score;
      }
      if (response.avatarUrl) {
        state.userData.avatarUrl = response.avatarUrl;
      }
    },
    withdrawCost(state, sum) {
      state.userData.score -= sum;
    },
  },
  actions: {
    updateUserData({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data').then(({ data }) => {
        commit('updateUserData', data);
      }).catch((error) => {
        console.error(error);
      });
    },
    getClothes() {
      return axios.get('templates/-_RLsEGjof6i/data').catch((error) => {
        console.error(error);
      });
    },
    getAccessories() {
      return axios.get('templates/q3OPxRyEcPvP/data').catch((error) => {
        console.error(error);
      });
    },
  },
});
