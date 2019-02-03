<template>
  <div class="ui-button">
    <button
      class="ui-button__element"
      :disabled="disabled"
      v-bind="attrs"
      v-on="listeners"
    >
      <div class="ui-button__body">
        <UiIcon
          v-if="icon"
          :icon="icon" 
          :size="16"
        /><div class="ui-button__label">
          <slot></slot>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ui-button',
  props: {
    value: {
      type: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
  },
  computed: {
    attrs() {
      return { ...this.$attrs };
    },
    listeners() {
      const { emitClick: click } = this;

      return {
        ...this.$listeners,
        click,
      };
    },
  },
  methods: {
    emitClick() {
      this.$emit('click', this.value);
    },
  },
};
</script>

<style src="../styles/components/UiButton.scss" lang="scss" />
