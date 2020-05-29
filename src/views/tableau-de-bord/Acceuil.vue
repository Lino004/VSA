<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h4 class="is-size-4"> {{$t('pgAcceuil.titre')}} </h4>
      </div>
    </div>
    <div class="ml-40">
      <div class="columns is-multiline is-variable is-5">
        <div class="column is-4">
          <div class="box is-min-height-100p box-shadow-2 border-radius-20">
            <h5 class="is-size-5 has-text-default pb-60">Solde</h5>
            <div class="level">
              <div class="level-left">
                <p class="is-size-5 has-text-black">6 000 fcfa</p>
              </div>
              <div class="level-right">
                <a class="button is-primary is-small is-width-85 is-rounded">
                  <b-icon
                    icon="arrow-right-bold"
                    size="is-small">
                  </b-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="box is-min-height-100p box-shadow-2 border-radius-20">
            <h5 class="is-size-5 has-text-default pb-60">Nombre d’ enfants</h5>
            <div class="level is-mobile">
              <div class="level-left"></div>
              <div class="level-right">
                <p class="is-size-5 has-text-black">5</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="box is-min-height-100p box-shadow-2 border-radius-20">
            <h5 class="is-size-5 has-text-default pb-60">Rendez-vous</h5>
            <div class="level is-mobile">
              <div class="level-left"></div>
              <div class="level-right">
                <p class="is-size-5 has-text-black">2</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-8">
          <div class="box is-min-height-100p box-shadow-2 border-radius-20">
            <BarChart :chartdata="chartData"/>
          </div>
        </div>
        <div class="column is-4">
          <div class="box is-min-height-100p box-shadow-2 border-radius-20">
            <div class="level is-mobile">
              <div class="level-left">
                <a class="">
                  <b-icon
                    pack="fas"
                    icon="bell"
                    type="is-aquamarine">
                  </b-icon>
                </a>
                <small class="has-text-weight-bold">Notifications</small>
              </div>
              <div class="level-right">
                <a class="">
                  <b-icon
                    icon="dots-horizontal-circle"
                    type="is-black">
                  </b-icon>
                </a></div>
            </div>
            <div class="box box-shadow-0 is-border-2 pa-10 mb-10"
                 v-for="(not, i) in notifications"
                 :key="i">
              <div class="level is-mobile">
                <div class="level-left is-size-7
                            has-badge-rounded
                            has-badge-left
                            has-badge-small
                            is-trunc"
                     :class="`${not.type}`"
                     data-badge="">
                  {{not.text}}
                </div>
                <div class="level-right is-size-7 is-italic">
                  {{not.date}}
                </div>
              </div>
            </div>
            <div class="level">
              <div class="level-left"></div>
              <div class="level-item">
                <b-button type="is-aquamarine" class="is-width-100">
                  <small>Plus</small>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/tableau-de-bord/acceuil/BarChart.vue';
import { LISTE_MOIS } from '@/configuration/datePickerConf';

export default {
  components: {
    BarChart,
  },
  data: () => ({
    notifications: [
      {
        text: 'Dr Alet Robinson a changé la date de votre visite',
        date: '1 jour',
        type: 'has-badge-danger',
      },
      {
        text: 'Le Dr Jasmin a annulé votre visite',
        date: '2 jour',
        type: 'has-badge-danger',
      },
      {
        text: 'Vous avez modifié votre horaire pour consulter',
        date: '3 jour',
        type: 'has-badge-aquamarine',
      },
      {
        text: 'Vous avez annulé le rendez-vous avec le Dr Trang',
        date: '4 jour',
        type: 'has-badge-primary',
      },
    ],
    chartData: {
      labels: LISTE_MOIS.map((el) => el.slice(0, 3)),
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#009FF9',
          data: [40, 20, 12, 39, 10, 40, 39, 60, 40, 20, 12, 11],
        },
      ],
    },
  }),
  methods: {},
};
</script>

<style>

</style>
