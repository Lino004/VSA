// import * as allTypes from '../mutation-type';
import cloneDeep from 'lodash/cloneDeep';
import * as types from './enfants-mutation-type';

const dataEnfantModel = {
  nom: '',
  prenom: '',
  age: null,
  dataNaissance: null,
  sexe: null,
};

function initialState() {
  return {
    currentData: cloneDeep(dataEnfantModel),
  };
}

const states = initialState();

const namespaced = true;

const mutations = {
  [types.SET_CURRENT_DATA](state, data) {
    state.currentData = data;
  },
};

const actions = {
};

const getters = {};

export default {
  namespaced,
  states,
  mutations,
  actions,
  getters,
};
