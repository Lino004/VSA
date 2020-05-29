<template>
  <div>
    <div class="level is-mobile">
      <div class="level-left">
        <div>
          <h4 class="is-size-4"> Mes enfants </h4>
          <p class="is-size-6 has-text-default">Détail de votre enfant</p>
        </div>
      </div>
      <div class="level-right">
        <a class="button is-rounded is-primary is-width-100"  @click="$router.go(-1)">
          Retour
        </a>
      </div>
    </div>
    <div class="ml-40">
      <div class="card card-detail-enfant">
        <div class="card-content pa-0">
          <div class="media pl-30">
            <div class="media-left avatar-detail-enfant">
              <avatar :size="120" username="Francisco M."></avatar>
            </div>
            <div class="media-content">
              <p class="is-size-4">TCHAOU</p>
              <p class="is-size-4">Rosalia, Belle</p>
            </div>
          </div>
        </div>
      </div>
      <div class="colums">
        <div class="column is-two-thirds-desktop is-paddingless mt-40">
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
                    <p class="is-size-7">Age</p>
                    <p class="is-size-6">30 ans</p>
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="is-size-7">Date de naisssance</p>
                    <p class="is-size-6">30/10/1997</p>
                  </div>
                </div>
                <div class="level-right">
                  <div>
                    <p class="is-size-7">Height</p>
                    <p class="is-size-6">180 cm</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="is-size-7">Alergie</p>
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
                    class="is-width-60p button-modif-enfant">Modifier</b-button>
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
  }),
  computed: {},
  methods: {},
};
</script>

<style>
.card-detail-enfant{
  box-shadow: 0px 3px 6px #0000000F !important;
  border-radius: 9px 9px 50px 50px;
}
.avatar-detail-enfant{
  position: relative;
  top: 40px;
}
.button-modif-enfant{
  background: transparent
    linear-gradient(98deg, #0074E4 0%, #00AAFA 37%, #00D6E8 67%, #6FFACB 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #00000033 !important;
  border-radius: 5px;
}
</style>
