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
    <Drag v-if="canTransfer" :transfer-data="colors">
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
    canTransfer: {
      type: Boolean,
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
    onAddPalette(colors) {
      this.emitUpdateColors(colors);
    },
    emitUpdateColors(colors) {
      const clonedColors = colors.map(d => d.clone());

      this.$emit('update:colors', clonedColors);
    },
    emitUpdateColor(color) {
      this.$emit('update:color', color.clone());
    },
  },
  components: {
    Drag,
    Drop,
    UiColorSwatch,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorStrip';
</style>
