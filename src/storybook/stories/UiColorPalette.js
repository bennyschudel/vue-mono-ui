import { storiesOf } from '@storybook/vue';

import { Color } from '../../core';

storiesOf('UiColorPalette', module)
  .add('default widget', () => ({
    data: () => ({
      color: Color('hotpink'),
      colors: ['pink', 'beige', 'teal', 'orange'].map(Color),
    }),
    template: `<div>
      <UiColorPalette :colors.sync="colors" />
      <UiColorInput :color.sync="color" format="hex" />
    </div>`,
  }))
  .add('drag & drop palettes', () => ({
    data: () => ({
      color: Color('hotpink'),
      colors: ['pink', 'beige', 'teal', 'orange'].map(Color),
      colors2: ['red', 'blue', 'green', 'yellow'].map(Color),
    }),
    template: `<div>
      <UiColorPalette :colors.sync="colors" />
      <UiColorPalette :colors.sync="colors2" />
      <UiColorInput :color.sync="color" format="hex" />
    </div>`,
  }));
