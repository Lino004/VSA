import Vue from 'vue';
import VueRouter from 'vue-router';
import Inscription from '../views/Inscription.vue';
import SmsConfirm from '../views/SmsConfirm.vue';
import Connexion from '../views/Connexion.vue';

import TableauDeBord from '../views/tableau-de-bord/index.vue';
import Acceuil from '../views/tableau-de-bord/Acceuil.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    redirect: '/inscription',
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription,
  },
  {
    path: '/sms-confirmation',
    name: 'sms-confirmation',
    component: SmsConfirm,
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion,
  },
  {
    path: '/tableau-de-bord',
    component: TableauDeBord,
    children: [
      {
        path: '',
        name: 'tdb-acceuil',
        component: Acceuil,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
