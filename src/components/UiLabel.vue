<template>
  <component :is="tag" :class="classes"
    ><slot></slot
  ></component>
</template>

<script>
import { Component } from '../core';

export default {
  name: 'ui-label',
  extends: Component,
  props: {
    tag: {
      default: 'label',
    },
  },
};
</script>

<style src="../styles/components/UiLabel.scss" lang="scss" />
