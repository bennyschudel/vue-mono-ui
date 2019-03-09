<template>
  <div class="ui-spinner" :style="styles" :data-absolute="absolute">
    <div class="ui-spinner__body"></div>
  </div>
</template>

<script>
export default {
  name: 'ui-spinner',
  props: {
    absolute: {
      type: Boolean,
    },
    diameter: {
      type: Number,
    },
    thickness: {
      type: Number,
    },
  },
  computed: {
    styles() {
      const { diameter, thickness } = this;

      return {
        '--ui-spinner__diameter': diameter ? `${diameter}px` : undefined,
        '--ui-spinner__thickness': thickness ? `${thickness}px` : undefined,
      };
    },
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiSpinner.scss';
</style>
