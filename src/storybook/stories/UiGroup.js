import { storiesOf } from '@storybook/vue';

storiesOf('UiGroup', module).add('default', () => ({
  data: () => ({
    firstName: 'Bart',
    lastName: 'Simpson',
  }),
  template: `
<UiGroup>
  <UiField label="First name"><UiInput :value.sync="firstName" /></UiField>
  <UiField label="Last name"><UiInput :value.sync="lastName" /></UiField>
</UiGroup>`,
}));
