<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <div>
          <h4 class="is-size-4"> {{$t('profil.titre')}} </h4>
          <!-- <p class="is-size-6 has-text-default">Détail de votre enfant</p> -->
        </div>
      </div>
      <div class="level-right">
        <!-- <a class="button is-rounded is-primary is-width-100"  @click="$router.go(-1)">
          Retour
        </a> -->
      </div>
    </div>
    <div class="ml-40">
      <div class="card card-detail-profil">
        <div class="card-content pa-0">
          <div class="level">
            <div class="level-left">
              <div class="media pl-30">
                <div class="media-left avatar-detail-profil pb-10">
                  <avatar :size="120" :username="`${data.nom} ${data.prenom}`"></avatar>
                </div>
                <div class="media-content">
                  <p class="is-size-4"> {{data.nom}} </p>
                  <p class="is-size-4"> {{data.prenom}} </p>
                </div>
              </div>
            </div>
            <div class="level-right pr-30">
              <b-button type="is-danger" rounded>
                {{$t('profil.btnDesactiver')}}
              </b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-multiline mt-40">
        <div class="column is-8">
          <div class="card box-shadow-4 border-raduis-10">
            <div class="card-content">
              <Info/>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card box-shadow-4 border-raduis-10 is-min-height-100p">
            <div class="card-content">
              <Abonnement/>
            </div>
          </div>
        </div>
        <div class="column is-12">
          <div class="card box-shadow-4 border-raduis-10">
            <div class="card-content">
              <LastFacture/>
            </div>
          </div>
        </div>
        <div class="column is-12 pb-60">
          <div class="card box-shadow-4 border-raduis-10">
            <div class="card-content">
              <EtatCotisation/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from '@/configuration/enfants';
import Avatar from 'vue-avatar';
import Info from '@/components/tableau-de-bord/profil/infos.vue';
import Abonnement from '@/components/tableau-de-bord/profil/abonnement.vue';
import LastFacture from '@/components/tableau-de-bord/profil/lastFactures.vue';
import EtatCotisation from '@/components/tableau-de-bord/profil/etatCotisation.vue';

export default {
  components: {
    Avatar,
    Info,
    Abonnement,
    LastFacture,
    EtatCotisation,
  },
  data: () => ({
    config,
    data: {
      nom: 'AKAKPO',
      prenom: 'Akofa',
      age: 15,
      dataNaissance: '01/02/2005',
      sexe: 'M',
      id: 1,
    },
  }),
  computed: {},
  methods: {},
};
</script>

<style>
</style>
