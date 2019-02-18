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
@import '../styles/components/UiInput.scss';
</style>
