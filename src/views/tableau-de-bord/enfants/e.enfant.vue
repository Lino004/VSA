<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <div>
          <h4 class="is-size-4"> Mes enfants </h4>
          <p class="is-size-6 has-text-default"> {{titrePage}} </p>
        </div>
      </div>
      <div class="level-right">
        <a class="button is-rounded is-primary is-width-100"  @click="$router.go(-1)">
          {{$t('enfant.edition.btnRetour')}}
        </a>
      </div>
    </div>
    <div class="ml-40">
      <div class="card card-edit">
        <div class="card-content">
          <DropProfil v-model="image"/>
          <div class="columns is-multiline">

            <!-- Nom -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('enfant.edition.label.nom')}} </span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.nom.valide === false ? 'is-danger' : ''"
                  :message="controle.nom.msg">
                  <InputCustum
                    v-model.trim="info.nom"
                    expanded
                    :placeholder="$t('enfant.edition.placeholder.nom')"
                    type="name"
                    @blur="verificationChamps('nom')"/>
                </b-field>
              </div>
            </div>

            <!-- Genre -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('enfant.edition.label.genre')}} </span>
              </div>
              <div class="column is-6">
                <b-field>
                  <b-select
                    v-model="info.genre"
                    expanded>
                      <option
                        v-for="genre in genres"
                        :key="genre.value"
                        :value="genre.value">
                        {{genre.libelle}}
                      </option>
                  </b-select>
                </b-field>
              </div>
            </div>

            <!-- Prenom -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('enfant.edition.label.prenom')}} </span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.prenom.valide === false ? 'is-danger' : ''"
                  :message="controle.prenom.msg">
                  <InputCustum
                    v-model.trim="info.prenom"
                    expanded
                    :placeholder="$t('enfant.edition.placeholder.prenom')"
                    type="name"
                    @blur="verificationChamps('prenom')"/>
                </b-field>
              </div>
            </div>

            <!-- Date de naissance -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('enfant.edition.label.dataNaissance')}} </span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.dataNaissance.valide === false ? 'is-danger' : ''"
                  :message="controle.dataNaissance.msg">
                  <b-datepicker
                    v-model="info.dataNaissance"
                    :placeholder="$t('enfant.edition.placeholder.dataNaissance')"
                    icon="calendar-today"
                    editable
                    @blur="verificationChamps('dataNaissance')">
                  </b-datepicker>
                </b-field>
              </div>
            </div>

          </div>

          <div class="has-text-centered py-20">
            <b-button rounded type="is-primary">
              {{$t('enfant.edition.btnEnregistrer')}}
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from '@/configuration/enfants';
import cloneDeep from 'lodash/cloneDeep';
import DropProfil from '@/components/general/DropProfil.vue';
import { GENRE } from '@/configuration/inscription';
import InputCustum from '@/components/general/InputCustum.vue';

export default {
  components: {
    DropProfil,
    InputCustum,
  },
  data: () => ({
    config,
    image: null,
    genres: GENRE,
    info: {
      nom: '',
      prenom: '',
      genre: 'H',
      dataNaissance: null,
    },
    controle: {
      nom: { valide: null, msg: '' },
      prenom: { valide: null, msg: '' },
      dataNaissance: { valide: null, msg: '' },
    },
  }),
  computed: {
    titrePage() {
      if (this.isModif) return this.$t('enfant.edition.pageModifTitre');
      return this.$t('enfant.edition.pageAjoutTitre');
    },
    isModif() {
      return this.$route.params.id !== undefined;
    },
  },
  methods: {
    verificationChamps(champs) {
      if (champs === 'nom' || champs === 'prenom') {
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(this.info[champs])) {
          this.controle[champs].valide = false;
          this.controle[champs].msg = this.$t(`enfant.edition.msgErr.${champs}`);
        } else {
          this.controle[champs].valide = true;
          this.controle[champs].msg = '';
        }
        return;
      }
      if (champs === 'dataNaissance') {
        if (!this.info.dataNaissance) {
          this.controle.dataNaissance.valide = false;
          this.controle.dataNaissance.msg = this.$t('enfant.edition.msgErr.dataNaissance');
        } else {
          this.controle.dataNaissance.valide = true;
          this.controle.dataNaissance.msg = '';
        }
      }
    },
    controleGlobal() {
      const listeChampsObligatoire = Object.keys(this.controle);
      listeChampsObligatoire.forEach((el) => {
        this.verificationChamps(el);
      });
      const controle = cloneDeep(this.controle);
      if (!controle.email) delete controle.email;
      const result = Object.values(controle).map((el) => el.valide).every((el) => el === true);
      return result;
    },
  },
  mounted() {
    /* if (this.isModif) {

    } */
  },
};
</script>

<style lang="scss">
</style>
