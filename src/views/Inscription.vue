<template>
  <section class="hero is-height-100p is-overflow-y-auto" id="page-ins">
    <div class="hero-head">
      <img
        src="@/assets/images/general/logo.png"
        alt="Logo VSA Afrique"
        class="mt-30 ml-30">
    </div>

    <div class="hero-body align-items-start py-0">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-11">
            <div class="card border-raduis-10 box-shadow-1">
              <div class="card-content">

                <h2 class="is-size-3 mb-30">{{$t('inscription.titre')}}</h2>

                <div class="content">
                  <div class="columns is-multiline">

                    <!-- Nom -->
                    <div class="column columns is-vcentered
                                is-6 is-marginless is-paddingless
                                is-variable is-5">
                      <div class="column is-6">
                        <span> {{$t('inscription.label.nom')}} </span>
                      </div>
                      <div class="column is-6">
                        <b-field
                          :type="controle.nom.valide === false ? 'is-danger' : ''"
                          :message="controle.nom.msg">
                          <b-input
                            v-model="info.nom"
                            expanded
                            :placeholder="$t('inscription.placeholder.nom')"
                            @blur="verificationChamps('nom')"/>
                        </b-field>
                      </div>
                    </div>

                    <!-- Prenom -->
                    <div class="column columns is-vcentered
                                is-6 is-marginless is-paddingless
                                is-variable is-5">
                      <div class="column is-6">
                        <span> {{$t('inscription.label.prenom')}} </span>
                      </div>
                      <div class="column is-6">
                        <b-field
                          :type="controle.prenom.valide === false ? 'is-danger' : ''"
                          :message="controle.prenom.msg">
                          <b-input
                            v-model="info.prenom"
                            expanded
                            :placeholder="$t('inscription.placeholder.prenom')"
                            @blur="verificationChamps('prenom')"/>
                        </b-field>
                      </div>
                    </div>

                    <!-- Genre -->
                    <div class="column columns is-vcentered
                                is-6 is-marginless is-paddingless
                                is-variable is-5">
                      <div class="column is-6">
                        <span> {{$t('inscription.label.genre')}} </span>
                      </div>
                      <div class="column is-6">
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
                                is-6 is-marginless is-paddingless
                                is-variable is-5">
                      <div class="column is-6">
                        <span> {{$t('inscription.label.dataNaissance')}} </span>
                      </div>
                      <div class="column is-6">
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
                            v-model="info.email"
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
                            v-model="info.ville"
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
                          <b-input
                            v-model="info.nbrEnfant"
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
                            v-model="info.adresse"
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
                          <b-input
                            v-model="info.situationProfessionnelle"
                            expanded
                            :placeholder="$t('inscription.placeholder.situationProfessionnelle')"/>
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
                          <b-input
                            v-model="info.telephone"
                            expanded
                            :placeholder="$t('inscription.placeholder.telephone')"
                            type="number"
                            @blur="verificationChamps('telephone')"/>
                        </b-field>
                      </div>
                    </div>

                    <!-- Fichier de la pièce d’identité en cours de validité -->
                    <div class="column columns is-vcentered
                                is-6 is-marginless is-paddingless
                                is-variable is-5">
                      <div class="column is-8">
                        <span>{{$t('inscription.label.pieceIdentite')}}</span>
                      </div>
                      <div class="column is-4 has-text-right">
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
                      <div class="column is-8">
                        <span>{{$t('inscription.label.attestationResidence')}}</span>
                      </div>
                      <div class="column is-4 has-text-right">
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
                </div>

                <div class="content py-30">
                  <div class="columns is-marginless is-paddingless is-centered is-variable is-5">
                    <div class="column is-2 has-text-right">
                      <b-button
                        type="is-danger"
                        size="is-medium"
                        rounded
                        expanded>
                        <span class="is-size-6">
                          {{$t('inscription.libellBtnAnnuler')}}
                        </span>
                      </b-button>
                    </div>
                    <div class="column is-2">
                      <b-button
                        type="is-primary"
                        size="is-medium"
                        rounded
                        expanded
                        @click="confirmTelephone">
                        <span class="is-size-6">
                          {{$t('inscription.libellBtnEnregistrer')}}
                        </span>
                      </b-button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot pt-10">
      <FooterInfo/>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import LISTE_PAYS from '@/services/pays';
import * as config from '@/configuration/inscription';
import * as typesInscription from '@/store/modules/inscription-mutation-type';
import FooterInfo from '@/components/general/FooterInfo.vue';

const Inscription = createNamespacedHelpers('inscription');

export default {
  components: {
    FooterInfo,
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
    },
    paysInput: '',
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
  },
  methods: {
    ...Inscription.mapMutations({
      actionSetInfoUser: typesInscription.INFO_USER,
    }),
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
      }
      if (champs === 'dataNaissance') {
        if (!this.info.dataNaissance) {
          this.controle.dataNaissance.valide = false;
          this.controle.dataNaissance.msg = this.$t('inscription.msgErr.dataNaissance');
        } else {
          this.controle.dataNaissance.valide = true;
          this.controle.dataNaissance.msg = '';
        }
      }
      if (champs === 'email') {
        const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        if (!regex.test(this.info[champs])) {
          this.controle[champs].valide = false;
          this.controle[champs].msg = this.$t('inscription.msgErr.email');
        } else {
          this.controle[champs].valide = true;
          this.controle[champs].msg = '';
        }
      }
      if (champs === 'pays') {
        if (!this.info.pays) {
          this.controle.pays.valide = false;
          this.controle.pays.msg = this.$t('inscription.msgErr.pays');
        } else {
          this.controle.pays.valide = true;
          this.controle.pays.msg = '';
        }
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
      }
      if (champs === 'adresse') {
        if (!this.info.adresse) {
          this.controle.adresse.valide = false;
          this.controle.adresse.msg = this.$t('inscription.msgErr.adresse');
        } else {
          this.controle.adresse.valide = true;
          this.controle.adresse.msg = '';
        }
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
      }
    },
    controleGlobal() {
      const listeChampsObligatoire = Object.keys(this.controle);
      listeChampsObligatoire.forEach((el) => {
        this.verificationChamps(el);
      });
      const result = Object.values(this.controle).map((el) => el.valide).every((el) => el === true);
      return result;
    },
    confirmTelephone() {
      this.$buefy.dialog.prompt({
        message: this.$t('inscription.dialog.msg'),
        inputAttrs: {
          type: 'number',
          placeholder: this.$t('inscription.placeholder.telephone'),
          value: this.info.telephone,
          maxlength: 2,
          min: 18,
        },
        confirmText: this.$t('general.libelleBtn.confirmer'),
        cancelText: this.$t('general.libelleBtn.annuler'),
        trapFocus: true,
        onConfirm: (value) => {
          this.info.telephone = value;
          this.inscription();
        },
      });
    },
    inscription() {
      if (this.controleGlobal()) {
        this.actionSetInfoUser(this.info);
        this.$router.push({ name: 'sms-confirmation' });
      }
    },
  },
  mounted() {
    if (this.infoUser) {
      this.info = this.infoUser;
      this.info.dataNaissance = new Date(this.info.dataNaissance);
      this.paysInput = this.info.pays.nom;
    }
  },
};
</script>

<style>

</style>
