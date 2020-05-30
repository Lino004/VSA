import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
import inscription from './modules/inscription';
import enfants from './modules/enfants';

const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    inscription,
    enfants,
  },
  plugins: [createPersistedState({
    key: 'vsa-client',
    paths: ['inscription', 'enfants'],
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })],
});

export default store;
