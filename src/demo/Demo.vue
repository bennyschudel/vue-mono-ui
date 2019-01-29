<template>
  <div class="demo">
    <UiButton>Hello</UiButton>
    <UiInput :value.sync="inputValue" />
    <pre>{{inputValue}} {{typeof inputValue}}</pre>

    <UiWidgetManager>
      <UiWidget :appearance.sync="widgets[0].appearance">Hello</UiWidget>
      <UiWidget :appearance.sync="widgets[1].appearance">World</UiWidget>
    </UiWidgetManager>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data: () => ({
    inputValue: 'hello',
    widgets: [
      {
        appearance: 'normal',
      },
      {
        appearance: 'normal',
      },
    ],
  }),
};
</script>

<style lang="scss">
.demo {
  .ui-widget {
    border: 1px solid black;
    background-color: white;
  }
}
</style>
