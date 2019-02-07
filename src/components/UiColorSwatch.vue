<template>
  <div :class="classes" :style="styles"></div>
</template>

<script>
import { Component } from '../core';

export default {
  name: 'ui-color-swatch',
  extends: Component,
  props: {
    value: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
  computed: {
    styles() {
      const { value, width, height } = this;

      return {
        backgroundColor: value,
        width: `${width}px`,
        height: `${height}px`,
      };
    },
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorSwatch.scss';
</style>
