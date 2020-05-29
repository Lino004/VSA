<template>
  <b-table
    :data="liste"
    striped
    :loading="isLoading"
    mobile-cards
    checkable
    :checked-rows.sync="checkedRows">

    <template slot-scope="props">
      <b-table-column
        field="nom"
        label="NOM"
        sortable
        cell-class="has-text-default is-size-7 has-text-middle"
        header-class="is-size-7 py-15">
        <div class="media">
          <figure class="media-left">
            <avatar :size="45" username="Francisco M."></avatar>
          </figure>
          <div class="media-content">
            {{ props.row.nom }}
          </div>
        </div>
      </b-table-column>

      <b-table-column
        field="prenom"
        label="PRENOM"
        sortable
        cell-class="has-text-default is-size-7 has-text-middle"
        header-class="is-size-7 py-15">
        {{ props.row.prenom }}
      </b-table-column>

      <b-table-column
        field="age"
        label="AGE"
        sortable
        cell-class="has-text-default is-size-7 has-text-middle"
        header-class="is-size-7 py-15">
        {{ props.row.age }} ans
      </b-table-column>

      <b-table-column
        field="sexe"
        label="SEXE"
        sortable
        cell-class="has-text-default is-size-7 has-text-middle"
        header-class="is-size-7 py-15">
        {{ sexes.find((el) => el.value === props.row.sexe).libelle }}
      </b-table-column>

      <b-table-column
        label="ACTION"
        cell-class="has-text-middle"
        header-class="is-size-7 py-15"
        numeric>
        <Actions :data="props.row"/>
      </b-table-column>
    </template>

    <template slot="empty">
        <section class="section">
            <div class="content has-text-grey has-text-centered">
                <p>
                    <b-icon
                        icon="emoticon-sad"
                        size="is-large">
                    </b-icon>
                </p>
                <p>Nothing here.</p>
            </div>
        </section>
    </template>
  </b-table>
</template>

<script>
import Avatar from 'vue-avatar';
import { SEXE } from '@/configuration/enfants';
import Actions from './DropdownAction.vue';

export default {
  components: {
    Avatar,
    Actions,
  },
  props: {
    liste: Array,
  },
  data: () => ({
    isLoading: false,
    checkedRows: [],
    sexes: SEXE,
  }),
};
</script>

<style>

</style>
