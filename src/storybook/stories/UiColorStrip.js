import { storiesOf } from '@storybook/vue';

import { Color } from '../../core';

storiesOf('UiColorStrip', module)
  .add('default widget', () => ({
    data: () => ({
      colors: ['pink', 'beige', 'teal', 'orange'].map(Color),
      color: Color('hotpink'),
    }),
    template: `<div>
      <UiColorStrip :colors.sync="colors" :color.sync="color" />
      <UiColorInput :color.sync="color" format="hex" />
    </div>`,
  }))
  .add('with transfer option', () => ({
    data: () => ({
      colors: ['pink', 'beige', 'teal', 'orange'].map(Color),
      color: Color('hotpink'),
      colors2: ['red', 'blue', 'green'].map(Color),
      color2: Color('red'),
    }),
    template: `<div>
      <UiColorStrip :colors.sync="colors" :color.sync="color" can-transfer />
      <UiColorStrip :colors.sync="colors2" :color.sync="color2" can-transfer />
    </div>`,
  }));
