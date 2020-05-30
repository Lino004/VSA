<template>
  <div>
    <h5 class="is-size-5 has-text-grid-2 mb-20">
      {{$t('profil.etatCotisation.titre')}}
    </h5>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <div class="card box-shadow-5 pb-40">
          <div class="card-content has-text-centered">
            <p class="has-text-weight-bold has-text-black">
              <img width="120" src="@/assets/images/general/success.png">
              <br>
              {{$t('profil.etatCotisation.msgValid')}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
