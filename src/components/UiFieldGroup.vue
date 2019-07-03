<template>
  <fieldset
    class="ui-field-group"
    :disabled="disabled"
    :name="name"
    :data-collapsed="isCollapsible && collapsed"
  >
    <UiLabel v-if="label" tag="legend">{{ label }}</UiLabel>
    <div v-show="!collapsed" class="ui-field-group__content">
      <slot></slot>
    </div>
    <div v-if="isCollapsible" class="ui-field-group__collapse" @click="toggle">
      <UiIcon :icon="collapsed ? 'arrow-down' : 'arrow-up'" />
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
    collapsed: {
      type: Boolean,
    },
  },
  computed: {
    isCollapsible() {
      return this.$options.propsData.hasOwnProperty('collapsed');
    },
  },
  methods: {
    toggle() {
      this.$emit('update:collapsed', !this.collapsed);
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
