<template>
  <b-sidebar
    type="is-light"
    fullheight
    overlay
    :open.sync="open"
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
  computed: {
    open: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style>

</style>
