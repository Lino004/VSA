<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <div>
          <h4 class="is-size-4"> {{$t('enfant.titre')}} </h4>
          <p class="is-size-6 has-text-default">{{$t('enfant.liste.titre')}}</p>
        </div>
      </div>
      <div class="level-right">
        <a class="button is-rounded is-primary is-width-100"  @click="$router.go(-1)">
          {{$t('enfant.detail.btnRetour')}}
        </a>
      </div>
    </div>
    <div class="ml-40">
      <div class="card card-detail-profil">
        <div class="card-content pa-0">
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
      </div>
      <div class="columns mt-40">
        <div class="column is-two-thirds-desktop">
          <div class="card border-raduis-10 box-shadow-2">
            <div class="card-content">
              <div class="level is-mobile">
                <div class="level-left"></div>
                <div class="level-right">
                  <a>
                    <b-icon type="is-default" icon="dots-vertical"></b-icon>
                  </a>
                </div>
              </div>
              <div class="level is-mobile">
                <div class="level-left">
                  <div>
                    <p class="is-size-7">
                      {{$t('enfant.detail.age')}}
                    </p>
                    <p class="is-size-6"> {{data.age}} </p>
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="is-size-7">
                      {{$t('enfant.detail.dateNaissance')}}
                    </p>
                    <p class="is-size-6"> {{data.dataNaissance}} </p>
                  </div>
                </div>
                <div class="level-right">
                  <div>
                    <p class="is-size-7">
                      {{$t('enfant.detail.sexe')}}
                    </p>
                    <p class="is-size-6">
                      {{config.SEXE.find((el) => el.value === data.sexe).libelle}}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="is-size-7">
                  {{$t('enfant.detail.alergie')}}
                </p>
                <div class="column is-4 is-paddingless">
                  <div class="pa-5 is-inline">
                    <b-tag rounded type="is-primary">Penicillin</b-tag></div>
                  <div class="pa-5 is-inline">
                    <b-tag rounded type="is-primary">Nuts</b-tag></div>
                  <div class="pa-5 is-inline">
                    <b-tag rounded type="is-primary">Shellfish</b-tag></div>
                  <div class="pa-5 is-inline">
                    <b-tag rounded type="is-primary">Spores</b-tag></div>
                </div>
              </div>
              <div class="level pa-30">
                <div class="level-left"></div>
                <div class="level-item">
                  <b-button
                    type="is-primary"
                    class="is-width-60p button-modif-enfant"
                    @click="$router.push({
                      name: 'tdb-modifier-enfant',
                      params: {
                        id: data.id
                    }})">
                    {{$t('enfant.detail.btnModifier')}}
                    </b-button>
                </div>
                <div class="level-right"></div>
              </div>
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

export default {
  components: {
    Avatar,
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
.button-modif-enfant{
  background: transparent
    linear-gradient(98deg, #0074E4 0%, #00AAFA 37%, #00D6E8 67%, #6FFACB 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #00000033 !important;
  border-radius: 5px;
}
</style>
