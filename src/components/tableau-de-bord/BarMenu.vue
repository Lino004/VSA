<template>
  <b-sidebar
    position="static"
    fullheight
    type="is-light"
    open
    class="is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
    <BarMenuContent/>
  </b-sidebar>
</template>

<script>
import BarMenuContent from './BarMenuContent.vue';

export default {
  components: {
    BarMenuContent,
  },
  data: () => ({}),
};
</script>

<style>

</style>
