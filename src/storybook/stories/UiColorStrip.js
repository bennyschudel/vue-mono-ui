import { storiesOf } from '@storybook/vue';

import { Color } from '../../core';

storiesOf('UiColorStrip', module).add('default widget', () => ({
  data: () => ({
    colors: ['pink', 'beige', 'teal', 'orange'].map(Color),
    color: Color('hotpink'),
  }),
  template: `<div>
      <UiColorStrip :colors.sync="colors" :color.sync="color" />
      <UiColorInput :color.sync="color" format="hex" />
    </div>`,
}));
