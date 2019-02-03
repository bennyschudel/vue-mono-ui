import { storiesOf } from '@storybook/vue';

storiesOf('UiColorInput', module).add('default widget', () => ({
  data: () => ({
    value: 'red',
  }),
  template: `<UiColorInput :value.sync="value" format="hex" as-string />`,
}));
