import { storiesOf } from '@storybook/vue';

storiesOf('UiInput', module).add('default widget', () => ({
  data: () => ({
    value: 'Hello world',
  }),
  template: `<UiInput :value.sync="value" />`,
}));
