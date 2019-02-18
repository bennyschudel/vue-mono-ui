<template>
  <div class="ui-color-palette">
    <UiColorSwatch
      v-for="(item, index) in colors"
      :key="index"
      :color="item"
      :transfer="transfer"
      @update:color="d => onColorUpdate(d, index)"
    />
  </div>
</template>

<script>
import { Component } from '../core';
import { cloneDeep } from '../core/utils';

import { Transfer } from '../mixins';

import UiColorSwatch from './UiColorSwatch.vue';

export default {
  name: 'ui-color-palette',
  extends: Component,
  mixins: [Transfer],
  props: {
    colors: {
      type: Array,
    },
  },
  methods: {
    onColorUpdate(d, i) {
      const colors = cloneDeep(this.colors);

      colors[i] = d;

      this.$emit('update:colors', colors);
    },
  },
  components: {
    UiColorSwatch,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorPalette';
</style>
