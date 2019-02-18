<template>
  <div :class="classes">
    <div class="ui-select__container">
      <select class="ui-select__element" :value="value" @change="onChange">
        <option v-if="hasEmpty"></option>
        <option
          v-for="(item, index) in options_"
          :key="index"
          :value="item.value"
          :data-type="typeof item.value"
        >
          {{ item.label || item.value }}
        </option>
      </select>
      <UiIcon icon="arrow-down"></UiIcon>
    </div>
  </div>
</template>

<script>
import { Component } from '../core';
import { isPlainObject } from '../core/utils';

import UiIcon from './UiIcon.vue';

export default {
  name: 'ui-select',
  extends: Component,
  props: {
    value: {
      type: null,
    },
    options: {
      type: Array,
    },
    hasEmpty: {
      type: Boolean,
    },
  },
  computed: {
    options_() {
      return this.options.map(v => {
        if (isPlainObject(v)) {
          return v;
        }

        return {
          label: v,
          value: v,
        };
      });
    },
  },
  methods: {
    onChange(ev) {
      const { target } = ev;
      let { value } = target;
      const el = target.item(target.selectedIndex);
      const { type } = el.dataset;

      if (type === 'number') {
        value = Number(value);
      }

      this.emitUpdateValue(value);
    },
    emitUpdateValue(v) {
      this.$emit('update:value', v);
    },
  },
  components: {
    UiIcon,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiSelect';
</style>
