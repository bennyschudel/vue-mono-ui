<template>
  <div class="ui-color-input">
    <UiColorSwatch
      v-if="!noSwatch"
      :value="value"
      :width="24"
      :height="24"
    /><UiInput
      class="ui-color-input__field"
      ref="input"
      :value="value"
      @change="onChange($event.target.value)"
    />
  </div>
</template>

<script>
import { upperFirst } from 'lodash';

import { Color } from '../core';

import UiColorSwatch from './UiColorSwatch.vue';

export default {
  name: 'ui-color-input',
  props: {
    value: {
      type: String,
    },
    format: {
      type: String,
    },
    asString: {
      type: Boolean,
    },
    noSwatch: {
      type: Boolean,
    },
  },
  methods: {
    reset() {
      this.$refs.input.value = this.value;
    },
    convert(value) {
      const { format, asString } = this;

      let color = new Color(value);

      if (!color.isValid()) {
        return this.reset();
      }

      if (format) {
        let fn = `to${upperFirst(format)}${asString ? 'String' : ''}`;

        if (!(fn in color)) {
          return this.reset();
        }

        color = color[fn]();
      }

      this.$emit('update:value', color);
    },
    onChange(v) {
      this.convert(v);
    },
  },
  components: {
    UiColorSwatch,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorInput.scss';
</style>
