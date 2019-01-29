<template>
  <div class="ui-input">
    <input
      class="ui-input__field"
      ref="input"
      :value="value"
      v-bind="$attrs"
      v-on="$listeners"
      @input="onInput"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  props: {
    value: {
      type: [String, Number],
    },
    lazy: {
      type: Boolean,
    },
  },
  computed: {
    value_: {
      get() {
        return this.value;
      },
      set(v) {
        let value = v;

        if (typeof this.value === 'number') {
          let parsedValue = Number(v);
          if (!isNaN(parsedValue)) {
            value = parsedValue;
          }
        }

        this.$emit('update:value', value);
      },
    },
  },
  methods: {
    onInput(event) {
      if (this.lazy) {
        return;
      }

      const { value } = event.target;

      this.value_ = value;
    },
    onChange(event) {
      const { value } = event.target;

      this.value_ = value;
    },
  },
};
</script>

<style lang="scss">
.ui-input {
}

.ui-input__field {
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
