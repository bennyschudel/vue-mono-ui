<template>
  <div class="ui-color-palette" :data-is-sortable="isSortable">
    <div v-if="totalColors > 0" class="ui-color-palette__palette">
      <Draggable
        class="ui-color-palette__draggable"
        :value="colors"
        :animation="200"
        ghost-class="ui-color-palette__ghost"
        :disabled="!isSortable"
        @input="onDraggableChange"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group
          class="ui-color-palette__list"
          tag="div"
          type="transition"
          :name="!isDragging ? 'ui-color-palette__flip-list' : null"
        >
          <UiColorSwatch
            v-for="item in colors"
            :key="item.toHex8()"
            :color="item"
            :selected="item.equals(color)"
            transfer="drag"
            @update:selected="onSwatchSelect(item)"
          />
        </transition-group>
      </Draggable>
    </div>
    <div class="ui-color-palette__admin">
      <Drop @drop="onAddColor" class="ui-drop" v-ui-drop-target="canAddColor">
        <UiIconButton
          icon="plus"
          :icon-size="16"
          :padding="2"
          :margin="2"
          :disabled="!canAddColor"
          data-action="new-color"
        />
      </Drop>
      <div class="ui-color-palette__spacer" />
      <UiIconButton
        :icon="isSortable ? 'sortable-block-active' : 'sortable-block'"
        :icon-size="16"
        :padding="2"
        :margin="2"
        @click="onSortColors"
      />
      <Drop
        @drop="onRemoveColor"
        class="ui-drop"
        v-ui-drop-target="canRemoveColor"
      >
        <UiIconButton
          icon="trash"
          :icon-size="16"
          :padding="2"
          :margin="2"
          :disabled="!canRemoveColor"
          @click="onRemoveColor(color)"
        />
      </Drop>
      <Drag :transfer-data="colors">
        <Drop
          @drop="onAddPalette"
          class="ui-drop"
          v-ui-drop-target="canAddPalette"
        >
          <UiIconButton
            icon="palette"
            :icon-size="16"
            :padding="2"
            :margin="2"
            :disabled="!canAddPalette"
            data-action="new-palette"
          />
        </Drop>
      </Drag>
    </div>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';
import Draggable from 'vuedraggable';

import { Component, Color } from '../core';
import { isNil } from '../core/utils';

import UiColorSwatch from './UiColorSwatch.vue';
import UiIconButton from './UiIconButton.vue';

export default {
  name: 'ui-color-palette',
  extends: Component,
  props: {
    colors: {
      type: Array,
    },
    color: {
      type: Color,
    },
  },
  data: () => ({
    isDragging: false,
    isSortable: false,
  }),
  computed: {
    totalColors() {
      return this.colors.length;
    },
    canAddColor() {
      return !this.isSortable;
    },
    canRemoveColor() {
      return !this.isSortable;
    },
    canAddPalette() {
      return !this.isSortable;
    },
  },
  methods: {
    onDraggableChange(d) {
      this.isSortable = false;
      this.emitUpdateColors(d);
    },
    onAddColor(color) {
      if (!this.canAddColor || !(color instanceof Color)) {
        return;
      }

      const { colors } = this;

      if (colors.find(d => d.equals(color))) {
        return;
      }

      const newColors = colors.slice();
      newColors.push(color);

      this.emitUpdateColors(newColors);
    },
    onRemoveColor(color) {
      if (!this.canRemoveColor) {
        return;
      }

      let { colors } = this;

      const index = colors.findIndex(d => d.equals(color));

      if (isNil(index) || index === -1) {
        return;
      }

      const newColors = colors.filter((d, i) => i !== index);

      this.emitUpdateColors(newColors);
    },
    onSortColors() {
      this.isSortable = !this.isSortable;
    },
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
    Draggable,
    UiColorSwatch,
    UiIconButton,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorPalette';
</style>
