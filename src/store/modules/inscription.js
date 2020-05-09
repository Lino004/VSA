// import * as allTypes from '../mutation-type';
import * as types from './inscription-mutation-type';

function initialState() {
  return {
    infoUser: {},
  };
}

const states = initialState();

const namespaced = true;

const mutations = {
  [types.INFO_USER](state, data) {
    state.infoUser = data;
  },
};

const actions = {
};

const getters = {
  infoUser: (state) => state.infoUser,
};

export default {
  namespaced,
  states,
  mutations,
  actions,
  getters,
};
