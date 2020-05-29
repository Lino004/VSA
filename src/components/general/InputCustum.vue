<template>
  <b-input
    v-model="displayValue"
    expanded
    :placeholder="placeholder"
    @blur="eventBlur"
    @focus="eventFocus"
    @input="setValue"/>
</template>

<script>
export default {
  name: 'input-currency',
  props: {
    placeholder: String,
    value: String,
    expanded: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      displayValue: '',
    };
  },
  methods: {
    eventBlur() {
      this.displayValue = this.value;
      this.$emit('blur');
    },
    eventFocus() {
      this.displayValue = this.value;
      this.$emit('focus');
    },
    setValue() {
      const val = this.displayValue;
      if (!val) {
        this.$emit('input', '');
        return;
      }
      if (this.type === 'text') {
        this.$emit('input', val);
        return;
      }
      if (this.type === 'number') {
        const valModif = val.replace(/[^\d]/g, '');
        this.$emit('input', valModif);
        return;
      }
      if (this.type === 'name') {
        const valModif = val.replace(/[^a-zA-Z ]/g, '');
        this.$emit('input', valModif);
      }
    },
  },
  mounted() {
    this.displayValue = this.value;
  },
};
</script>

<style>

</style>
