<template>
  <div class="demo">
    <UiWidgetManager>
      <UiWidget title="Buttons">
        <UiButton>Hello</UiButton>
        <UiButton icon="download">Hello</UiButton>
      </UiWidget>

      <UiWidget title="Range">
        <UiRange :value.sync="rangeValue" />
      </UiWidget>

      <UiWidget title="Input">
        <UiInput :value.sync="inputValue" />
        <pre>{{ inputValue }} {{ typeof inputValue }}</pre>
      </UiWidget>

      <UiWidget
        v-for="(item, index) in widgets"
        :key="index"
        :appearance.sync="item.appearance"
        :title="item.title"
      >
        {{ item.content }}
      </UiWidget>

      <UiWidget title="Spinner">
        <UiSpinner />
      </UiWidget>
    </UiWidgetManager>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data: () => ({
    inputValue: 'hello',
    rangeValue: 50,
    widgets: [
      {
        title: 'Widget 1',
        appearance: 'normal',
        content: 'Hello',
      },
      {
        title: 'Widget 2',
        appearance: 'normal',
        content: 'World',
      },
    ],
  }),
};
</script>

<style lang="scss">
@import '../styles/variables';

.demo {
  .ui-widget {
    border: 1px solid black;
    background-color: white;
  }
}
</style>
