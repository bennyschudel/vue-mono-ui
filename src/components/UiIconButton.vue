<template>
  <button
    class="ui-icon-button"
    @click="onClick"
    :style="styles"
    :data-active="active"
  >
    <UiIcon :icon="icon" :size="iconSize"></UiIcon>
  </button>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'ui-icon-button',
  props: {
    icon: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    iconSize: {
      type: Number,
      default: 24,
    },
    padding: {
      type: Number,
      default: 6,
    },
    margin: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    styles() {
      const { iconSize, padding, margin } = this;

      return {
        width: `${iconSize}px`,
        height: `${iconSize}px`,
        padding: `${padding}px`,
        borderWidth: `${margin}px`,
      };
    },
    size() {
      return this.iconSize + this.padding + this.margin;
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
  components: {
    UiIcon,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiIconButton.scss';
</style>
