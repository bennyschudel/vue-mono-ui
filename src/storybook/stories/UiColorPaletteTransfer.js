import { storiesOf } from '@storybook/vue';

import { Color } from '../../core';

storiesOf('UiColorPaletteTransfer', module).add('default widget', () => ({
  data: () => ({
    colors: ['pink', 'beige', 'teal', 'orange'].map(Color),
    colors2: ['red', 'blue', 'green', 'yellow'].map(Color),
  }),
  template: `<div>
      <UiColorPaletteTransfer :colors.sync="colors" />
      <UiColorStrip :colors="colors" />
      <UiColorPaletteTransfer :colors.sync="colors2" />
      <UiColorStrip :colors="colors2" />
    </div>`,
}));
