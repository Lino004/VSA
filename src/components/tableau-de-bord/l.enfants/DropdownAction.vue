<template>
  <b-dropdown aria-role="list" position="is-bottom-left">
    <a class="" slot="trigger">
      <b-icon icon="dots-vertical"></b-icon>
    </a>

    <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'tdb-detail-enfant' })">
      <div class="level is-mobile">
        <div class="level-left">
          <b-icon class="mr-10" icon="eye"></b-icon>Détails
        </div>
      </div>
    </b-dropdown-item>
    <b-dropdown-item aria-role="listitem">
      <div class="level is-mobile">
        <div class="level-left">
          <b-icon class="mr-10" icon="pencil"></b-icon>Éditer
        </div>
      </div>
    </b-dropdown-item>
    <b-dropdown-item aria-role="listitem">
      <div class="level is-mobile">
        <div class="level-left">
          <b-icon class="mr-10" icon="delete"></b-icon>Supprimer
        </div>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>

</style>
