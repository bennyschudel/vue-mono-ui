import { storiesOf } from '@storybook/vue';

storiesOf('UiIconButton', module)
  .add('default', () => '<UiIconButton icon="star" />')
  .add('toggle', () => ({
    data: () => ({
      active: false,
    }),
    template: `
<UiIconButton
  icon="star"
  :active="active"
  @click="active = !active"
/>`,
  }));
