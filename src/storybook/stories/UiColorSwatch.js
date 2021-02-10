import { storiesOf } from '@storybook/vue';

import { Color } from '../../core';

storiesOf('UiColorSwatch', module)
  .add('default widget', () => ({
    data: () => ({
      color: Color('#ff0'),
    }),
    template: `<UiColorSwatch :color="color" />`,
  }))
  .add('drag and drop', () => ({
    data: () => ({
      color: Color('gold'),
      colors: ['hotpink', 'gold', 'chocolate', 'red', 'green', 'blue'].map(
        d => Color(d),
      ),
    }),
    template: `
<div :style="{ display: 'flex' }">
  <UiColorInput
    :color.sync="color"
     format="hex"
  />
  <UiColorPalette
    :colors.sync="colors"
    transfer="drag"
  />
</div>
`,
  }));
