import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store/store';
import './assets/scss/app.scss';
import * as translate from './i18n/translate';
import initTranslate from './i18n/serviceTranslate';
import i18n from './i18n';
import {
  dateParser,
  LISTE_JOURS,
  LISTE_MOIS,
  JOUR_DEBUT_SEMAINE,
} from './configuration/datePickerConf';

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
  defaultContainerElement: '#content',
  defaultDayNames: LISTE_JOURS,
  defaultMonthNames: LISTE_MOIS,
  defaultFirstDayOfWeek: JOUR_DEBUT_SEMAINE,
  defaultDateParser: (date) => dateParser(date),
  defaultDateFormatter: (date) => date.toLocaleDateString('fr'),
});

const filter = (text, length, clamp) => {
  const dataClamp = clamp || '...';
  const node = document.createElement('div');
  node.innerHTML = text;
  const content = node.textContent;
  return content.length > length ? content.slice(0, length) + dataClamp : content;
};

Vue.filter('truncate', filter);

Vue.config.productionTip = false;
const messages = translate.TRANSLATE;
if (process.env.NODE_ENV === 'development') {
  initTranslate(messages.fr);
}

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
