import { storiesOf } from '@storybook/vue';

storiesOf('UiRange', module).add('default widget', () => ({
  data: () => ({
    value: 0,
  }),
  template: `<UiRange :value.sync="value" />`,
}));
