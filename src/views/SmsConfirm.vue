<template>
  <section class="hero is-fullheight" id="page-ins">
    <div class="hero-head">
      <img
        src="@/assets/images/general/logo.png"
        alt="Logo VSA Afrique"
        class="mt-30 ml-30">
    </div>

    <div class="hero-body align-items-start py-0">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6">
            <div class="card border-raduis-10 box-shadow-1">
              <div class="card-content">

                <h2 class="is-size-3 mb-30">
                  {{$t('smsConfimation.titre')}}
                </h2>

                <div class="content">
                  <div class="columns is-multiline">

                    <!-- Code de confirmation -->
                    <div class="column columns is-vcentered
                                is-12 is-marginless is-paddingless
                                is-variable is-5">
                      <div class="column is-4">
                        <span>{{$t('smsConfimation.label.code')}}</span>
                      </div>
                      <div class="column is-8">
                        <b-field
                          :type="controle.code.valide === false ? 'is-danger' : ''"
                          :message="controle.code.msg">
                          <!-- <b-input
                            v-model="info.code"
                            expanded
                            :placeholder="$t('smsConfimation.placeholder.code')"
                            type="number"
                            @blur="verificationChamps('code')"/> -->
                          <InputCustum
                            v-model.trim="info.code"
                            expanded
                            :placeholder="$t('smsConfimation.placeholder.code')"
                            type="number"
                            @blur="verificationChamps('code')"/>
                        </b-field>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="content pb-30">
                  <div class="columns is-marginless is-paddingless is-centered is-variable is-5">
                    <div class="column is-6">
                      <b-button
                        type="is-primary"
                        size="is-medium"
                        rounded
                        expanded
                        @click="confirmation">
                        <p class="is-size-6">
                          {{$t('smsConfimation.libellBtnConfirmer')}}
                        </p>
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

    <div class="hero-foot">
      <FooterInfo/>
    </div>
  </section>
</template>

<script>
import FooterInfo from '@/components/general/FooterInfo.vue';
import InputCustum from '@/components/general/InputCustum.vue';

export default {
  components: {
    FooterInfo,
    InputCustum,
  },
  data: () => ({
    info: {
      code: null,
    },
    controle: {
      code: { valide: null, msg: '' },
    },
    is_number: false,
  }),
  computed: {},
  methods: {
    verificationChamps(champs) {
      if (champs === 'code') {
        if (this.info.code) {
          if (this.info.code.length < 4) {
            this.controle.code.valide = false;
            this.controle.code.msg = this.$t('smsConfimation.msgErr.code');
          } else {
            this.controle.code.valide = true;
            this.controle.code.msg = '';
          }
        } else {
          this.controle.code.valide = false;
          this.controle.code.msg = this.$t('smsConfimation.msgErr.defaut');
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
    confirmation() {
      if (this.controleGlobal()) {
        this.$router.push({ name: 'Connexion' });
      }
    },
  },
  mounted() {},
};
</script>

<style>

</style>
