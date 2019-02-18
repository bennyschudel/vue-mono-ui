<template>
  <div class="ui-color-input">
    <UiColorSwatch
      v-if="!noSwatch"
      :color="color"
      :transfer="transfer"
      @update:color="onChange"
    />
    <Component :is="inputComponent" @drop="onDrop">
      <UiInput
        class="ui-color-input__field"
        ref="input"
        :value="value"
        @change="onChange($event.target.value)"
      />
    </Component>
  </div>
</template>

<script>
import { Drop } from 'vue-drag-drop';

import { Component, Color } from '../core';
import { upperFirst } from '../core/utils';

import { Transfer } from '../mixins';

import UiColorSwatch from './UiColorSwatch.vue';

export default {
  name: 'ui-color-input',
  extends: Component,
  mixins: [Transfer],
  props: {
    color: {
      type: Color,
    },
    format: {
      type: String,
      default: 'hex',
    },
    noSwatch: {
      type: Boolean,
    },
  },
  computed: {
    value() {
      const fn = `to${upperFirst(this.format)}String`;

      return this.color[fn]();
    },
    inputComponent() {
      return this.droppable ? 'Drop' : 'div';
    },
  },
  methods: {
    reset() {
      this.$refs.input.value = this.value;
    },
    convert(value) {
      let color = new Color(value);

      if (!color.isValid()) {
        return this.reset();
      }

      this.$emit('update:color', color);
    },
    onChange(v) {
      this.convert(v);
    },
    onDrop(v) {
      this.convert(v);
    },
  },
  components: {
    Drop,
    UiColorSwatch,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorInput.scss';
</style>
