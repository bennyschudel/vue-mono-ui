import { storiesOf } from '@storybook/vue';

storiesOf('UiButton', module)
  .add('default button', () => '<UiButton>My Button</UiButton>')
  .add('button with icon', () => '<UiButton icon="sync">Sync</UiButton>');
