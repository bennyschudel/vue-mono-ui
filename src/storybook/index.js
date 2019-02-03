import Vue from 'vue';

import { configure } from '@storybook/vue';

import * as components from './components/index';

import './styles/storybook.scss';

const SbComponents = {
  install: Vue => {
    Object.keys(components).forEach(componentName => {
      Vue.component(componentName, components[componentName]);
    });
  },
};

Vue.use(SbComponents);

const req = require.context('./stories', true);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
