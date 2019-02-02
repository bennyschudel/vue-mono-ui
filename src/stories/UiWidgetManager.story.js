import { storiesOf } from '@storybook/vue';

storiesOf('UiWidgetManager', module).add('default widget', () => ({
  data: () => ({
    widgets: [
      {
        title: 'Widget A',
        appearance: 'normal',
      },
      {
        title: 'Widget B',
        appearance: 'normal',
      },
    ],
  }),
  template: `
<UiWidgetManager>
  <UiWidget
    v-for="(item, index) in widgets"
    v-bind="item"
    :key="index"
  ><SbBox /></UiWidget>
</UiWidgetManager>`,
}));
