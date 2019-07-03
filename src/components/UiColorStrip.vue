<template>
  <div class="ui-color-strip">
    <UiColorSwatch
      v-for="(item, i) in colors"
      :key="i"
      :color="item"
      :selected="item.equals(color)"
      transfer="drag"
      @update:selected="onSwatchSelect(item)"
    />
  </div>
</template>

<script>
import { Component, Color } from '../core';

import UiColorSwatch from './UiColorSwatch.vue';

export default {
  name: 'ui-color-strip',
  extends: Component,
  props: {
    colors: {
      type: Array,
    },
    color: {
      type: Color,
    },
  },
  computed: {
    totalColors() {
      return this.colors.length;
    },
  },
  methods: {
    onSwatchSelect(color) {
      this.emitUpdateColor(color);
    },
    emitUpdateColor(color) {
      this.$emit('update:color', color.clone());
    },
  },
  components: {
    UiColorSwatch,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorStrip';
</style>
