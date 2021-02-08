import { storiesOf } from '@storybook/vue';

import { Color } from '../../core';

storiesOf('UiColorPaletteCollection', module).add('default widget', () => ({
  data: () => ({
    palettes: [
      {
        label: 'Palette 1',
        colors: ['pink', 'beige', 'teal', 'orange'].map(Color),
      },
      {
        label: 'Palette 2',
        colors: ['red', 'blue', 'green', 'yellow'].map(Color),
      },
    ],
    color: Color('hotpink'),
  }),
  template: `<div>
      <UiColorPaletteCollection :palettes.sync="palettes" />
      <hr />
      <UiColorInput :color.sync="color" format="hex" />
    </div>`,
}));
