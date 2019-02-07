<template>
  <div
    class="ui-widget-manager"
    @mousedown="focusWidget($event.target)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-widget-manager',
  data: () => ({
    z: 0,
  }),
  methods: {
    focusWidget(target) {
      const widget = target.matches('.ui-widget')
        ? target
        : target.closest('.ui-widget');

      if (!widget) {
        return;
      }

      const widgetStyles = window.getComputedStyle(widget);
      const widgetZ = Number(widgetStyles.getPropertyValue('z-index'));

      if (this.z === widgetZ) {
        return;
      }

      widget.style.zIndex = ++this.z;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiWidgetManager.scss';
</style>
