import { storiesOf } from '@storybook/vue';

storiesOf('UiSelect', module).add('default widget', () => ({
  data: () => ({
    value: 0,
    options: [
      {
        label: 'A',
        value: 0,
      },
      {
        label: 'B',
        value: 1,
      },
      {
        label: 'C',
        value: 2,
      },
    ],
  }),
  template: `<UiSelect :value.sync="value" :options="options" />`,
}));
