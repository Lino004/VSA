<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <div>
          <h4 class="is-size-4"> Profil </h4>
          <!-- <p class="is-size-6 has-text-default">Détail de votre enfant</p> -->
        </div>
      </div>
      <div class="level-right">
        <a class="button is-rounded is-primary is-width-100"  @click="$router.go(-1)">
          Retour
        </a>
      </div>
    </div>
    <div class="ml-40">
      <div class="card card-edit">
        <div class="card-content">

          <div class="columns is-multiline">
            <div class="column is-2 is-paddingless">
              <DropProfil v-model="info.image" :size="150"/>
            </div>
            <div class="column is-5 is-paddingless">

              <!-- Nom -->
              <div class="column columns is-vcentered
                          is-12 is-marginless is-paddingless
                          is-variable is-5">
                <div class="column is-4">
                  <span> {{$t('inscription.label.nom')}} </span>
                </div>
                <div class="column is-8">
                  <b-field
                    :type="controle.nom.valide === false ? 'is-danger' : ''"
                    :message="controle.nom.msg">
                    <InputCustum
                      v-model.trim="info.nom"
                      expanded
                      :placeholder="$t('inscription.placeholder.nom')"
                      type="name"
                      @blur="verificationChamps('nom')"/>
                  </b-field>
                </div>
              </div>

              <!-- Prenom -->
              <div class="column columns is-vcentered
                          is-12 is-marginless is-paddingless
                          is-variable is-5">
                <div class="column is-4">
                  <span> {{$t('inscription.label.prenom')}} </span>
                </div>
                <div class="column is-8">
                  <b-field
                    :type="controle.prenom.valide === false ? 'is-danger' : ''"
                    :message="controle.prenom.msg">
                    <InputCustum
                      v-model.trim="info.prenom"
                      expanded
                      :placeholder="$t('inscription.placeholder.prenom')"
                      type="name"
                      @blur="verificationChamps('prenom')"/>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="column is-5 is-paddingless">

              <!-- Genre -->
              <div class="column columns is-vcentered
                          is-12 is-marginless is-paddingless
                          is-variable is-5">
                <div class="column is-4">
                  <span> {{$t('inscription.label.genre')}} </span>
                </div>
                <div class="column is-8">
                  <b-field>
                    <b-select
                      v-model="info.genre"
                      expanded>
                        <option
                          v-for="genre in config.GENRE"
                          :key="genre.value"
                          :value="genre.value">
                          {{genre.libelle}}
                        </option>
                    </b-select>
                  </b-field>
                </div>
              </div>

              <!-- Date de naissance -->
              <div class="column columns is-vcentered
                          is-12 is-marginless is-paddingless
                          is-variable is-5">
                <div class="column is-4">
                  <span> {{$t('inscription.label.dataNaissance')}} </span>
                </div>
                <div class="column is-8">
                  <b-field
                    :type="controle.dataNaissance.valide === false ? 'is-danger' : ''"
                    :message="controle.dataNaissance.msg">
                    <b-datepicker
                      v-model="info.dataNaissance"
                      :placeholder="$t('inscription.placeholder.dataNaissance')"
                      icon="calendar-today"
                      editable
                      @blur="verificationChamps('dataNaissance')">
                    </b-datepicker>
                  </b-field>
                </div>
              </div>

            </div>
          </div>

          <div class="columns is-multiline">

            <!-- Email -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('inscription.label.email')}} </span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.email.valide === false ? 'is-danger' : ''"
                  :message="controle.email.msg">
                  <b-input
                    v-model.trim="info.email"
                    expanded
                    :placeholder="$t('inscription.placeholder.email')"
                    type="email"
                    @blur="verificationChamps('email')"/>
                </b-field>
              </div>
            </div>

            <!-- Pays de résidence -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('inscription.label.pays')}}</span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.pays.valide === false ? 'is-danger' : ''"
                  :message="controle.pays.msg">
                  <b-autocomplete
                    v-model="paysInput"
                    :data="filteredDataPays"
                    :placeholder="$t('inscription.placeholder.pays')"
                    icon="magnify"
                    field="nom"
                    clearable
                    keep-first
                    open-on-focus
                    @select="(option) => {
                      info.pays = option;
                      verificationChamps('pays');
                    }"
                    @blur="verificationChamps('pays')">
                    <template slot="empty">{{$t('inscription.listeVide')}}</template>
                  </b-autocomplete>
                </b-field>
              </div>
            </div>

            <!-- Ville de résidence -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('inscription.label.ville')}} </span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.ville.valide === false ? 'is-danger' : ''"
                  :message="controle.ville.msg">
                  <b-input
                    v-model.trim="info.ville"
                    expanded
                    :placeholder="$t('inscription.placeholder.ville')"
                    @blur="verificationChamps('ville')"/>
                </b-field>
              </div>
            </div>

            <!-- Nombre d’enfants à charge -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('inscription.label.nbrEnfant')}} </span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.nbrEnfant.valide === false ? 'is-danger' : ''"
                  :message="controle.nbrEnfant.msg">
                  <InputCustum
                    v-model.trim="info.nbrEnfant"
                    expanded
                    :placeholder="$t('inscription.placeholder.nbrEnfant')"
                    type="number"
                    @blur="verificationChamps('nbrEnfant')"/>
                </b-field>
              </div>
            </div>

            <!-- Situation matrimoniale -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('inscription.label.situationMatrimoniale')}} </span>
              </div>
              <div class="column is-6">
                <b-field>
                  <b-select
                    v-model="info.situationMatrimoniale"
                    expanded>
                      <option
                        v-for="situation in config.SITUATION_MATRIMONIALE"
                        :key="situation.value"
                        :value="situation.value">
                        {{situation.libelle}}
                      </option>
                  </b-select>
                </b-field>
              </div>
            </div>

            <!-- Adresse de résidence -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('inscription.label.adresse')}} </span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.adresse.valide === false ? 'is-danger' : ''"
                  :message="controle.adresse.msg">
                  <b-input
                    v-model.trim="info.adresse"
                    expanded
                    @blur="verificationChamps('adresse')"/>
                </b-field>
              </div>
            </div>

            <!-- Situation professionnelle -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('inscription.label.situationProfessionnelle')}} </span>
              </div>
              <div class="column is-6">
                <b-field>
                  <b-select
                    v-model="info.situationProfessionnelle"
                    expanded>
                      <option
                        v-for="situation in config.SITUATION_PROFESSIONNELLE"
                        :key="situation.value"
                        :value="situation.value">
                        {{situation.libelle}}
                      </option>
                  </b-select>
                </b-field>
              </div>
            </div>

            <!-- Telephone -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-6">
                <span> {{$t('inscription.label.telephone')}} </span>
              </div>
              <div class="column is-6">
                <b-field
                  :type="controle.telephone.valide === false ? 'is-danger' : ''"
                  :message="controle.telephone.msg">
                  <b-field
                    :type="controle.telephone.valide === false ? 'is-danger' : ''">
                    <p class="control indicatif-pays">
                      <b-select v-model="indicatifSelect">
                        <option
                          v-for="(indicatif, i) in indicatifPays"
                          :key="i"
                          :value="indicatif">
                          +{{indicatif}}
                        </option>
                      </b-select>
                    </p>
                    <InputCustum
                      v-model.trim="info.telephone"
                      expanded
                      :placeholder="$t('inscription.placeholder.telephone')"
                      type="number"
                      @blur="verificationChamps('telephone')"/>
                  </b-field>
                </b-field>
              </div>
            </div>

            <!-- Fichier de la pièce d’identité en cours de validité -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-7">
                <span>{{$t('inscription.label.pieceIdentite')}}</span>
              </div>
              <div class="column is-5 has-text-right">
                <b-button
                  type="is-light"
                  size="is-medium"
                  class="is-border-1 border-raduis-10"
                  @click="$buefy.toast.open('En cours de développement ...')">
                  <span class="is-size-6">
                    {{$t('inscription.libellBtnTelecharger')}}
                  </span>
                </b-button>
              </div>
            </div>

            <!-- Fichier de l’attestation de résidence numérisé -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-7">
                <span>{{$t('inscription.label.attestationResidence')}}</span>
              </div>
              <div class="column is-5 has-text-right">
                <b-button
                  type="is-light"
                  size="is-medium"
                  class="is-border-1 border-raduis-10"
                  @click="$buefy.toast.open('En cours de développement ...')">
                  <span class="is-size-6">
                    {{$t('inscription.libellBtnTelecharger')}}
                  </span>
                </b-button>
              </div>
            </div>

            <!-- Fichier de l’attestation de résidence numérisé -->
            <div class="column columns is-vcentered
                        is-6 is-marginless is-paddingless
                        is-variable is-5">
              <div class="column is-7">
                <span>{{$t('inscription.label.extraitNaissance')}}</span>
              </div>
              <div class="column is-5 has-text-right">
                <b-button
                  type="is-light"
                  size="is-medium"
                  class="is-border-1 border-raduis-10"
                  @click="$buefy.toast.open('En cours de développement ...')">
                  <span class="is-size-6">
                    {{$t('inscription.libellBtnTelecharger')}}
                  </span>
                </b-button>
              </div>
            </div>

          </div>

          <div class="has-text-centered py-20">
            <b-button rounded type="is-primary">Enregistrer</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import cloneDeep from 'lodash/cloneDeep';
import * as config from '@/configuration/inscription';
import LISTE_PAYS from '@/services/pays';
import DropProfil from '@/components/general/DropProfil.vue';
import InputCustum from '@/components/general/InputCustum.vue';

const Inscription = createNamespacedHelpers('inscription');

export default {
  components: {
    DropProfil,
    InputCustum,
  },
  data: () => ({
    listePays: LISTE_PAYS,
    info: {
      nom: '',
      prenom: '',
      genre: 'H',
      dataNaissance: null,
      email: '',
      pays: '',
      ville: '',
      nbrEnfant: null,
      situationMatrimoniale: 'celibataire',
      adresse: '',
      situationProfessionnelle: '',
      telephone: null,
      password: null,
      passwordConfirm: null,
      image: null,
    },
    controle: {
      nom: { valide: null, msg: '' },
      prenom: { valide: null, msg: '' },
      dataNaissance: { valide: null, msg: '' },
      email: { valide: null, msg: '' },
      pays: { valide: null, msg: '' },
      ville: { valide: null, msg: '' },
      nbrEnfant: { valide: null, msg: '' },
      adresse: { valide: null, msg: '' },
      telephone: { valide: null, msg: '' },
      password: { valide: null, msg: '' },
      passwordConfirm: { valide: null, msg: '' },
    },
    paysInput: '',
    indicatifSelect: '',
    config,
  }),
  computed: {
    ...Inscription.mapGetters([
      'infoUser',
    ]),
    filteredDataPays() {
      return this.listePays.filter((option) => option.nom
        .toString()
        .toLowerCase()
        .indexOf(this.paysInput.toLowerCase()) >= 0);
    },
    indicatifPays() {
      const liste = this.listePays.map((el) => el.indicatif);
      liste.sort((a, b) => {
        const val1 = parseInt(a, 10);
        const val2 = parseInt(b, 10);
        return val1 - val2;
      });
      return Array.from(new Set(liste));
    },
    indicatifPaysSelect: {
      get() {
        return this.info.pays.indicatif;
      },
    },
  },
  methods: {
    verificationChamps(champs) {
      if (champs === 'nom' || champs === 'prenom') {
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(this.info[champs])) {
          this.controle[champs].valide = false;
          this.controle[champs].msg = this.$t(`inscription.msgErr.${champs}`);
        } else {
          this.controle[champs].valide = true;
          this.controle[champs].msg = '';
        }
        return;
      }
      if (champs === 'dataNaissance') {
        if (!this.info.dataNaissance) {
          this.controle.dataNaissance.valide = false;
          this.controle.dataNaissance.msg = this.$t('inscription.msgErr.dataNaissance');
        } else {
          this.controle.dataNaissance.valide = true;
          this.controle.dataNaissance.msg = '';
        }
        return;
      }
      if (champs === 'email') {
        if (this.info[champs]) {
          const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
          if (!regex.test(this.info[champs])) {
            this.controle[champs].valide = false;
            this.controle[champs].msg = this.$t('inscription.msgErr.email');
          } else {
            this.controle[champs].valide = true;
            this.controle[champs].msg = '';
          }
        }
        return;
      }
      if (champs === 'pays') {
        if (!this.info.pays) {
          this.controle.pays.valide = false;
          this.controle.pays.msg = this.$t('inscription.msgErr.pays');
        } else {
          this.controle.pays.valide = true;
          this.controle.pays.msg = '';
        }
        return;
      }
      if (champs === 'ville') {
        if (!this.info.ville) {
          this.controle.ville.valide = false;
          this.controle.ville.msg = this.$t('inscription.msgErr.ville');
        } else {
          this.controle.ville.valide = true;
          this.controle.ville.msg = '';
        }
      }
      if (champs === 'nbrEnfant') {
        if (!this.info.nbrEnfant) {
          this.controle.nbrEnfant.valide = false;
          this.controle.nbrEnfant.msg = this.$t('inscription.msgErr.nbrEnfant');
        } else {
          this.controle.nbrEnfant.valide = true;
          this.controle.nbrEnfant.msg = '';
        }
        return;
      }
      if (champs === 'adresse') {
        if (!this.info.adresse) {
          this.controle.adresse.valide = false;
          this.controle.adresse.msg = this.$t('inscription.msgErr.adresse');
        } else {
          this.controle.adresse.valide = true;
          this.controle.adresse.msg = '';
        }
        return;
      }
      if (champs === 'telephone') {
        if (this.info.telephone) {
          if (this.info.telephone.length < 8) {
            this.controle.telephone.valide = false;
            this.controle.telephone.msg = this.$t('inscription.msgErr.telephone');
          } else {
            this.controle.telephone.valide = true;
            this.controle.telephone.msg = '';
          }
        } else {
          this.controle.telephone.valide = false;
          this.controle.telephone.msg = this.$t('inscription.msgErr.defaut');
        }
        // return;
      }
      /* if (champs === 'password') {
        if (this.info.password) {
          if (this.info.password.length < 8) {
            this.controle.password.valide = false;
            this.controle.password.msg = this.$t('inscription.msgErr.password1', ['8']);
          } else if (!/[a-z]{1,}/.test(this.info.password)) {
            this.controle.password.valide = false;
            this.controle.password.msg = this.$t('inscription.msgErr.password2');
          } else if (!/[A-Z]{1,}/.test(this.info.password)) {
            this.controle.password.valide = false;
            this.controle.password.msg = this.$t('inscription.msgErr.password3');
          } else if (!/[0-9]{1,}/.test(this.info.password)) {
            this.controle.password.valide = false;
            this.controle.password.msg = this.$t('inscription.msgErr.password4');
          } else if (!/[^\w]{1,}/.test(this.info.password)) {
            this.controle.password.valide = false;
            this.controle.password.msg = this.$t('inscription.msgErr.password5');
          } else {
            this.controle.password.valide = true;
            this.controle.password.msg = '';
          }
        } else {
          this.controle.password.valide = false;
          this.controle.password.msg = this.$t('inscription.msgErr.defaut');
        }
        return;
      }
      if (champs === 'passwordConfirm') {
        if (this.info.passwordConfirm) {
          if (this.info.passwordConfirm !== this.info.password) {
            this.controle.passwordConfirm.valide = false;
            this.controle.passwordConfirm.msg = this.$t('inscription.msgErr.passwordConfirm');
          } else {
            this.controle.passwordConfirm.valide = true;
            this.controle.passwordConfirm.msg = '';
          }
        } else {
          this.controle.passwordConfirm.valide = false;
          this.controle.passwordConfirm.msg = this.$t('inscription.msgErr.defaut');
        }
      } */
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
  beforeMount() {
    this.info = cloneDeep(this.infoUser);
    this.info.dataNaissance = new Date(this.info.dataNaissance);
    this.indicatifSelect = this.info.pays.indicatif;
    this.paysInput = this.info.pays.nom;
  },
};
</script>

<style>

</style>
