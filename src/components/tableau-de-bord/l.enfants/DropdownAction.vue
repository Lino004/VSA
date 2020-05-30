<template>
  <b-dropdown aria-role="list" position="is-bottom-left">
    <a class="" slot="trigger">
      <b-icon icon="dots-vertical"></b-icon>
    </a>

    <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'tdb-detail-enfant' })">
      <div class="level is-mobile">
        <div class="level-left">
          <b-icon class="mr-10" icon="eye"></b-icon>
          {{$t('enfant.liste.dropAction.detail')}}
        </div>
      </div>
    </b-dropdown-item>
    <b-dropdown-item aria-role="listitem"
      @click="$router.push({
        name: 'tdb-modifier-enfant',
        params: {
          id: data.id
        }
      })">
      <div class="level is-mobile">
        <div class="level-left">
          <b-icon class="mr-10" icon="pencil"></b-icon>
          {{$t('enfant.liste.dropAction.edit')}}
        </div>
      </div>
    </b-dropdown-item>
    <b-dropdown-item aria-role="listitem">
      <div class="level is-mobile">
        <div class="level-left">
          <b-icon class="mr-10" icon="delete"></b-icon>
          {{$t('enfant.liste.dropAction.supprime')}}
        </div>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import * as types from '@/store/modules/enfants-mutation-type';

const Inscription = createNamespacedHelpers('inscription');
export default {
  props: {
    data: Object,
  },
  methods: {
    ...Inscription.mapMutations({
      actionSetCurrentData: types.SET_CURRENT_DATA,
    }),
  },
};
</script>

<style>

</style>
