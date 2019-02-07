<template>
  <div :class="classes">
    <div
      class="ui-range__element"
    ><input
      type="range"
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      @input="onInput"
      @change="onChange"
    /></div
    ><UiInput
      class="ui-range__input"
      type="number"
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      @input="onInputInput"
      @change="onInputChange"
    />
  </div>
</template>

<script>
import { Component } from '../core';
import { clamp } from '../core/utils';

import UiInput from './UiInput.vue';

export default {
  name: 'ui-range',
  extends: Component,
  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onInput(ev) {
      const { value } = ev.target;

      this.emitUpdateValue(value);
    },
    onChange(ev) {
      const { value } = ev.target;

      this.emitUpdateValue(value);
    },
    onInputInput(ev) {
      const { min, max } = this;
      let value = parseFloat(ev.target.value);

      if (isNaN(value)) {
        return;
      }

      value = clamp(value, min, max);
      ev.target.value = value;
    },
    onInputChange(ev) {
      const { value } = ev.target;

      this.emitUpdateValue(value);
    },
    emitUpdateValue(v) {
      this.$emit('update:value', parseFloat(v));
    },
  },
  components: {
    UiInput,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiRange.scss';
</style>
