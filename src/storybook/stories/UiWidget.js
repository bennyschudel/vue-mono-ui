import { storiesOf } from '@storybook/vue';

storiesOf('UiWidget', module)
  .add(
    'default widget',
    () => '<UiWidget title="My Widget"><SbBox /></UiWidget>',
  )
  .add('toggable widget', () => ({
    data: () => ({
      appearance: 'normal',
      seamless: true,
    }),
    template: `<UiWidget :appearance.sync="appearance" title="My Widget" :seamless="seamless"><SbBox /></UiWidget>`,
  }));
