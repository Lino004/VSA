<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-7">
            <img src="@/assets/images/authentification/illustration-1.png" alt="illustration-1">
          </div>
          <div class="column"></div>
          <div class="column is-4">
            <div class="card border-raduis-10 box-shadow-1 is-relative">
              <img
                src="@/assets/images/authentification/illustration-2.png"
                alt="illustration-2"
                class="pos-illustr-2">
              <div class="card-content pa-30">
                <b-field
                  class="mb-30"
                  :type="controle.identifiant.valide === false ? 'is-danger' : ''"
                  :message="controle.identifiant.msg">
                  <template slot="label">
                    <p class="has-text-grey has-text-weight-normal is-size-7">
                      {{$t('connexion.labelIdentifiant')}}
                    </p>
                  </template>
                  <b-input
                    v-model="info.identifiant"
                    expanded
                    :placeholder="$t('connexion.placeholder.identifiant')"
                    rounded
                    @blur="verificationChamps('identifiant')"/>
                </b-field>

                <b-field class="pb-30"
                  :type="controle.password.valide === false ? 'is-danger' : ''"
                  :message="controle.password.msg">
                  <template slot="label">
                    <p class="has-text-grey has-text-weight-normal is-size-7">
                      {{$t('connexion.labelMotDePasse')}}
                    </p>
                  </template>
                  <b-input
                    v-model="info.password"
                    type="password"
                    value="12345678"
                    rounded
                    @blur="verificationChamps('password')"/>
                </b-field>

                <b-button
                  type="is-primary"
                  expanded
                  rounded
                  size="is-medium"
                  class="my-30"
                  @click="connexion">
                  <span class="is-size-6">
                    {{$t('connexion.libelleBtnConnexion')}}
                  </span>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <FooterInfo/>
    </div>
  </section>
</template>

<script>
import FooterInfo from '@/components/general/FooterInfo.vue';

export default {
  components: {
    FooterInfo,
  },
  data: () => ({
    info: {
      identifiant: '+2296845791',
      password: '12345678',
    },
    controle: {
      identifiant: { valide: null, msg: '' },
      password: { valide: null, msg: '' },
    },
  }),
  methods: {
    verificationChamps(champs) {
      if (champs === 'identifiant') {
        if (!this.info[champs]) {
          this.controle[champs].valide = false;
          this.controle[champs].msg = this.$t('connexion.msgErr.identifiant');
        } else {
          this.controle[champs].valide = true;
          this.controle[champs].msg = '';
        }
      }
      if (champs === 'password') {
        if (!this.info.password) {
          this.controle.password.valide = false;
          this.controle.password.msg = this.$t('connexion.msgErr.password');
        } else {
          this.controle.password.valide = true;
          this.controle.password.msg = '';
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
    connexion() {
      if (this.controleGlobal()) {
        this.$router.push({ name: 'tdb-acceuil' });
      }
    },
  },
};
</script>

<style>

</style>
