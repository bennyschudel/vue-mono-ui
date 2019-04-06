<template>
  <Component
    :is="baseComponent"
    :class="classes"
    :style="styles"
    :tag="tag"
    :data-no-border="noBorder"
    :data-selected="selected"
    @drop="onDrop"
    @click="emitUpdateSelected"
  >
    <Drag
      v-if="draggable"
      class="ui-color-swatch__body"
      :transfer-data="color"
    ></Drag>
  </Component>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';

import { Component, Color } from '../core';

import { Transfer } from '../mixins';

export default {
  name: 'ui-color-swatch',
  extends: Component,
  mixins: [Transfer],
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    color: {
      type: Color,
    },
    noBorder: {
      type: Boolean,
    },
    selected: {
      type: Boolean,
    },
  },
  computed: {
    styles() {
      const selectedRgb = this.color
        .mostReadableBW()
        .toRgbArray()
        .join(', ');

      return {
        backgroundColor: this.color,
        '--ui-color-swatch__selected-rgb': selectedRgb,
      };
    },
    baseComponent() {
      return this.droppable ? 'Drop' : this.tag;
    },
  },
  methods: {
    onDrop(d) {
      this.emitUpdateColor(d);
    },
    emitUpdateColor(d) {
      const newColor = new Color(d);

      if (!newColor.isValid()) {
        return;
      }

      this.$emit('update:color', newColor);
    },
    emitUpdateSelected() {
      this.$emit('update:selected', true);
    },
  },
  components: {
    Drag,
    Drop,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorSwatch.scss';
</style>
