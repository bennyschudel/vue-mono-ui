import { storiesOf } from '@storybook/vue';

storiesOf('UiField', module)
  .add('default', () => ({
    data: () => ({
      value: 'Hello world',
    }),
    template: `<UiField label="Hello world"><UiInput :value.sync="value" /></UiField>`,
  }))
  .add('with range', () => ({
    data: () => ({
      value: 50,
    }),
    template: `<UiField label="Hello world"><UiRange :value.sync="value" /></UiField>`,
  }));
