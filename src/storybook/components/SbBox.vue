<template>
  <div class="sb-box" :style="styles"><slot></slot></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100,
    },
    height: {
      typer: Number,
      default: 100,
    },
  },
  computed: {
    styles() {
      const { width, height } = this;

      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    },
  },
};
</script>

<style lang="scss">
.sb-box {
  border: 1px solid steelblue;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd0cmFuc3BhcmVudCcvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J3N0ZWVsYmx1ZScgc3Ryb2tlLXdpZHRoPScxJy8+Cjwvc3ZnPgo=');
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
