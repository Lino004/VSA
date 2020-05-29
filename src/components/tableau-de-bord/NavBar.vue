<template>
  <b-navbar type="is-color-background">
    <template slot="brand">
      <b-navbar-item>
        <a @click="$emit('input', !value)" class="is-hidden-widescreen">
          <b-icon
            icon="menu"
            size="is-medium">
          </b-icon>
        </a>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="block">
          <a class="has-badge-rounded has-badge-danger" data-badge="8">
            <b-icon
              pack="fas"
              icon="bell"
              type="is-primary"
              size="is-medium">
            </b-icon>
          </a>
          <a class="has-badge-rounded has-badge-danger mx-20" data-badge="8">
            <b-icon
              pack="fas"
              type="is-primary"
              icon="comments"
              size="is-medium">
            </b-icon>
          </a>
          <a class="">
            <b-icon
              pack="fas"
              type="is-primary"
              icon="sign-out-alt"
              size="is-medium">
            </b-icon>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },

};
</script>

<style>

</style>
