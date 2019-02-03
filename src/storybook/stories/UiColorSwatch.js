import { storiesOf } from '@storybook/vue';

storiesOf('UiColorSwatch', module).add('default widget', () => ({
  data: () => ({
    value: 'hotpink',
  }),
  template: `<UiColorSwatch :value="value" />`,
}));
