import { storiesOf } from '@storybook/vue';

storiesOf('UiFieldGroup', module).add('default', () => ({
  data: () => ({
    firstName: 'Bart',
    lastName: 'Simpson',
    street: 'Street',
    streetNr: '14',
    postalCode: '1234',
    city: 'Zurich',
  }),
  template: `
<UiFieldGroup label="Address" :style="{ width: '240px' }">
  <UiField label="First name"><UiInput :value.sync="firstName" :style="{ flex: 1 }" /></UiField>
  <UiField label="Last name"><UiInput :value.sync="lastName" :style="{ flex: 1 }" /></UiField>
  <UiField label="Street">
    <UiGroup>
      <UiInput :value.sync="street" :style="{ flex: 1 }" />
      <UiInput :value.sync="streetNr" :style="{ flexBasis: '40px' }" />
    </UiGroup>
  </UiField>
  <UiField label="Postalcode / City">
    <UiGroup>
      <UiInput :value.sync="postalCode" :style="{ flexBasis: '60px' }"/>
      <UiInput :value.sync="city" :style="{ flex: 1 }"/>
    </UiGroup>
  </UiField>
</UiFieldGroup>`,
}));

storiesOf('UiFieldGroup', module).add('collapsible', () => ({
  data: () => ({
    firstName: 'Bart',
    lastName: 'Simpson',
    street: 'Street',
    streetNr: '14',
    postalCode: '1234',
    city: 'Zurich',
    collapsed: false,
  }),
  template: `
<UiFieldGroup label="Address" :style="{ width: '240px' }" :collapsed.sync="collapsed">
  <UiField label="First name"><UiInput :value.sync="firstName" :style="{ flex: 1 }" /></UiField>
  <UiField label="Last name"><UiInput :value.sync="lastName" :style="{ flex: 1 }" /></UiField>
  <UiField label="Street">
    <UiGroup>
      <UiInput :value.sync="street" :style="{ flex: 1 }" />
      <UiInput :value.sync="streetNr" :style="{ flexBasis: '40px' }" />
    </UiGroup>
  </UiField>
  <UiField label="Postalcode / City">
    <UiGroup>
      <UiInput :value.sync="postalCode" :style="{ flexBasis: '60px' }"/>
      <UiInput :value.sync="city" :style="{ flex: 1 }"/>
    </UiGroup>
  </UiField>
</UiFieldGroup>`,
}));
