<template>
  <div>
    <h5 class="is-size-5 has-text-grid-2 mb-20">
      {{$t('profil.info.titre')}}
    </h5>
    <div class="columns is-multiline">
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.nationalite')}}</p>
          <p class="is-size-6"> Béninoise </p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.situationMatrimonial')}}</p>
          <p class="is-size-6"> Célibataire </p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.nombreEnfants')}}</p>
          <p class="is-size-6"> 4 </p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.ville')}}</p>
          <p class="is-size-6"> Cotonou </p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.dateNaissance')}}</p>
          <p class="is-size-6">30/10/1997</p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.adresse')}}</p>
          <p class="is-size-6"> Ab-calavi Gbodjo lot 41 </p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.age')}}</p>
          <p class="is-size-6"> 30 ans </p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.email')}}</p>
          <p class="is-size-6"> kiki@gmail.com </p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.telephone')}}</p>
          <p class="is-size-6"> +229 62606333 </p>
        </div>
      </div>
      <div class="column is-4">
        <div>
          <p class="is-size-7">{{$t('profil.info.alergie')}}</p>
        </div>
        <div>
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
    </div>
    <div class="level pa-30">
      <div class="level-left"></div>
      <div class="level-item">
        <b-button
          type="is-primary"
          class="is-width-60p button-modif-enfant"
          @click="$router.push({ name: 'tdb-modifier-profil' })">
          {{$t('profil.info.btnModifier')}}
        </b-button>
      </div>
      <div class="level-right"></div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
