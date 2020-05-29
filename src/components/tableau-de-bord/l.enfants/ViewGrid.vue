<template>
  <div class="columns is-multiline">
    <div
      class="column is-6-tablet is-4-desktop"
      v-for="enfant in liste" :key="enfant.id">
      <div class="box box-shadow-0 border-raduis-10">
        <div class="media align-items-start mb-30">
          <figure class="media-left">
            <avatar :size="70" :username="getName(enfant)"></avatar>
          </figure>
          <div class="media-content">
            <h5 class="title is-5 mb-4">{{getName(enfant)}}</h5>
            <div class="level is-mobile">
              <div class="level-left">
                <div>
                  <h6 class="subtitle is-7 mb-4">Age</h6>
                  <h6 class="subtitle is-6 has-text-black">
                    {{enfant.age}}
                  </h6>
                </div>
              </div>
              <div class="level-right">
                <div>
                  <h6 class="subtitle is-7 mb-4">Sexe</h6>
                  <h6 class="subtitle is-6 has-text-black">
                    {{sexes.find((el) => el.value === enfant.sexe).libelle}}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="media-right">
            <Actions :data="enfant"/>
          </div>
        </div>
        <div class="has-text-centered">
          <b-button
            type="is-primary"
            class="is-width-60p box-shadow-3"
            @click="$router.push({ name: 'tdb-detail-enfant' })">
            <p class="is-size-7">Voir détails</p>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SEXE } from '@/configuration/enfants';
import Avatar from 'vue-avatar';
import Actions from './DropdownAction.vue';

export default {
  components: {
    Avatar,
    Actions,
  },
  props: {
    liste: Array,
  },
  data: () => ({
    sexes: SEXE,
  }),
  methods: {
    getName(data) {
      const nom = data.nom.split(' ')[0];
      const prenom = data.prenom.split(' ')[0];
      return `${prenom} ${nom}`;
    },
  },
};
</script>

<style>

</style>
