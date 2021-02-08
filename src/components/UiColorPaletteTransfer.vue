<template>
  <div class="ui-color-palette-transfer">
    <Drag :transfer-data="colors">
      <Drop @drop="onAddPalette" class="ui-drop">
        <UiIconButton
          icon="palette"
          :icon-size="16"
          :padding="2"
          :margin="2"
          data-action="new-palette"
        />
      </Drop>
    </Drag>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';

import { Component } from '../core';

import UiIconButton from './UiIconButton.vue';

export default {
  name: 'ui-color-palette-transfer',
  extends: Component,
  props: {
    colors: {
      type: Array,
    },
  },
  computed: {
    totalColors() {
      return this.colors.length;
    },
  },
  methods: {
    onAddPalette(colors) {
      this.emitUpdateColors(colors);
    },
    emitUpdateColors(colors) {
      const clonedColors = colors.map(d => d.clone());

      this.$emit('update:colors', clonedColors);
    },
  },
  components: {
    Drag,
    Drop,
    UiIconButton,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorPaletteTransfer';
</style>
