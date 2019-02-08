<template>
  <div class="ui-group">
    <slot></slot>
  </div>
</template>

<script>
import { Component } from '../core';

export default {
  name: 'ui-group',
  extends: Component,
};
</script>

<style lang="scss">
@import '../styles/components/UiGroup.scss';
</style>
