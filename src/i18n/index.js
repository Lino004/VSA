import Vue from 'vue';
import VueI18n from 'vue-i18n';
import * as translate from './translate';

const messages = translate.TRANSLATE;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'fr',
  messages,
});

export default i18n;
