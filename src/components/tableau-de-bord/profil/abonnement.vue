<template>
  <div>
    <h5 class="is-size-5 has-text-grid-2 mb-20">
      {{$t('profil.abonnement.titre')}}
    </h5>
    <div>
      <a class="button is-wh-85px box-shadow-2 border-raduis-10 vertical-align-bottom">
        <img src="@/assets/images/general/Health Care.svg">
      </a>
      <span class="pl-10">{{$t('profil.abonnement.expire')}} 16/10/2019</span>
    </div>
    <div class="pt-20">
      <div class="level mb-4">
        <div class="level-left">
          <img src="@/assets/images/general/wallet-solid.svg" class="pr-10">
          {{$t('profil.abonnement.portefeuille')}}
        </div>
        <div class="level-right has-text-weight-bold has-text-black is-size-14px">
          300 000F
        </div>
      </div>
      <div>
        <b-field class="is-slide-solde">
          <b-slider
            type="is-yello"
            size="is-large"
            :value="60"
            rounded
            disabled>
          </b-slider>
        </b-field>
      </div>
      <div class="level">
        <div class="level-left"></div>
        <div class="level-right has-text-weight-bold is-size-14px">
          {{$t('profil.abonnement.solde')}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">

</style>
