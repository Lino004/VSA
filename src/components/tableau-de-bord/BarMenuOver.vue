<template>
  <b-sidebar
    type="is-light"
    fullheight
    overlay
    :open.sync="value"
    @close="$emit('input', false)"
    class="is-hidden-widescreen">
    <BarMenuContent/>
  </b-sidebar>
</template>

<script>
import BarMenuContent from './BarMenuContent.vue';

export default {
  props: {
    value: Boolean,
  },
  components: {
    BarMenuContent,
  },
  data: () => ({}),
};
</script>

<style>

</style>
