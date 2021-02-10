<template>
  <div
    class="ui-widget"
    :style="styles"
    :data-active="active"
    :data-appearance="appearance"
    :data-seamless="seamless"
    @click="onClick"
  >
    <div class="ui-widget__bar" ref="bar">
      <div class="ui-widget__title" @click="toggleAppearance">{{ title }}</div>
    </div>
    <div v-show="is('normal')" class="ui-widget__content">
      <slot></slot>
    </div>
    <div v-show="is('normal')" class="ui-widget__widgets">
      <slot name="widgets"></slot>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'ui-widget',
  props: {
    id: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    appearance: {
      type: String,
      default: 'normal',
    },
    seamless: {
      type: Boolean,
    },
  },
  data: () => ({
    x: 0,
    y: 0,
    oldAppearance: null,
  }),
  computed: {
    styles() {
      const { x, y } = this;

      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    },
  },
  methods: {
    is(appearance) {
      return this.appearance === appearance;
    },
    setAppearance(v) {
      this.$emit('update:appearance', v);
    },
    toggleAppearance() {
      const { appearance } = this;
      let newAppearance = 'normal';

      if (appearance === 'normal') {
        newAppearance = this.oldAppearance;
      }

      this.setAppearance(newAppearance);
    },
    onClick() {
      this.$emit('select', this.id);
    },
    handleAppearanceChange(v, ov) {
      this.oldAppearance = ov;
    },
  },
  mounted() {
    const { x, y, $el } = this;
    const { bar: $bar } = this.$refs;

    d3.select($bar)
      .datum({ x, y })
      .call(
        d3
          .drag()
          .container(() => $el.parentNode)
          .on('drag', d => {
            let { x, y } = d3.event;

            x = Math.round(x);
            y = Math.round(y);

            d.x = x;
            d.y = y;

            this.x = x;
            this.y = y;
          }),
      );
  },
  watch: {
    appearance: 'handleAppearanceChange',
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiWidget.scss';
</style>
