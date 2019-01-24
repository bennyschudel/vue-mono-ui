<template>
  <div class="ui-color-input">
    <input
      class="ui-color-input__field"
      ref="input"
      :value="value"
      @change="onChange($event.target.value)"
    />
  </div>
</template>

<script>
import { upperFirst } from 'lodash';

import Color from '../core/Color';

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
};
</script>

<style lang="scss">
.ui-color-input {
}

.ui-color-input__field {
  font-size: 12px;
  font-family: Monaco;
  font-weight: 600;
  appearance: none;
  border: 0;
  padding: 4px 0;
  outline: none;
  border-bottom: 1px solid black;
  width: 100%;
}
</style>
