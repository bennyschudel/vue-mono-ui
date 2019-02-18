import { storiesOf } from '@storybook/vue';

import { Color } from '../../core';

storiesOf('UiColorInput', module).add('default widget', () => ({
  data: () => ({
    value: Color('red'),
  }),
  template: `<UiColorInput :color.sync="value" format="hex" />`,
}));
