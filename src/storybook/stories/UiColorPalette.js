import { storiesOf } from '@storybook/vue';

import { Color } from '../../core';

storiesOf('UiColorPalette', module).add('default widget', () => ({
  data: () => ({
    colors: ['pink', 'beige', 'teal', 'orange'].map(Color),
  }),
  template: `<UiColorPalette :colors.sync="colors" transfer="both" />`,
}));
