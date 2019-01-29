<template>
  <div
    class="ui-widget"
    :style="styles"
    :data-active="active"
    :data-appearance="appearance"
    @click="onClick"
  >
    <div
      class="ui-widget__bar"
      ref="bar"
      @click="toggleAppearance"
    >
      <div class="ui-widget__title" v-if="title">{{title}}</div>
    </div>
    <div
      v-show="is('normal')"
      class="ui-widget__content"
    >
      <slot></slot>
    </div>
    <div
      v-show="is('normal')"
      class="ui-widget__widgets"
    >
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
      default: 'Widget',
    },
    appearance: {
      type: String,
      default: 'normal',
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
.ui-widget {
  display: inline-flex;
  flex-direction: column;
  margin: 16px;
}

.ui-widget__bar {
  flex: 0 1 auto;
  font-size: 12px;
  font-family: Monaco, monospace;
  font-weight: 600;
  background-color: black;
  color: white;
  height: 32px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: stretch;
  user-select: none;
}

.ui-widget__content {
  background: white;
  user-select: none;
}
</style>
