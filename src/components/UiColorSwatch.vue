<template>
  <Component
    :is="baseComponent"
    :class="classes"
    :style="styles"
    @drop="onDrop"
    :data-no-border="noBorder"
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
    color: {
      type: Color,
    },
    noBorder: {
      type: Boolean,
    },
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.color,
      };
    },
    baseComponent() {
      return this.droppable ? 'Drop' : 'div';
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
