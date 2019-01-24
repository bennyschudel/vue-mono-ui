<template>
  <div
    class="ui-widget"
    :style="styles"
    :data-active="active"
    @click="onClick"
  >
    <div class="ui-widget__content" @mousedown.stop>
      <slot></slot>
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
  },
  data: () => ({
    x: 0,
    y: 0,
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
    onClick() {
      this.$emit('select', this.id);
    },
  },
  mounted() {
    const { x, y, $el } = this;

    d3.select($el)
      .datum({ x, y })
      .call(
        d3
          .drag()
          .subject(d => d)
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
};
</script>

<style lang="scss">
.ui-widget {
  display: inline-block;
  padding: 24px;
  background-color: white;
  box-shadow: 0 0 8px 0 hsla(0, 0%, 0%, 0.3);
  border-radius: 6px;
  user-select: none;
}
</style>
