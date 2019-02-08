<template>
  <fieldset class="ui-field-group" :disabled="disabled" :name="name">
    <UiLabel v-if="label" tag="legend">{{ label }}</UiLabel>
    <div class="ui-field-group__content">
      <slot></slot>
    </div>
  </fieldset>
</template>

<script>
import { Component } from '../core';

import UiLabel from './UiLabel.vue';

export default {
  name: 'ui-field',
  extends: Component,
  props: {
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    name: {
      type: String,
    },
  },
  components: {
    UiLabel,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiFieldGroup.scss';
</style>
