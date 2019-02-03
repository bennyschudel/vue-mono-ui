import { storiesOf } from '@storybook/vue';

storiesOf('UiWidget', module)
  .add(
    'default widget',
    () => '<UiWidget title="My Widget"><SbBox /></UiWidget>',
  )
  .add('toggable widget', () => ({
    data: () => ({
      appearance: 'normal',
    }),
    template: `<UiWidget :appearance.sync="appearance" title="My Widget"><SbBox /></UiWidget>`,
  }));
