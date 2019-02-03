<template>
  <div class="ui-field">
    <UiLabel v-if="label">{{label}}</UiLabel>
    <div class="ui-field__content"
      ><slot></slot
    ></div>
  </div>
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
  },
  components: {
    UiLabel,
  },
};
</script>

<style src="../styles/components/UiField.scss" lang="scss" />
