import Vue from 'vue';

import { configure } from '@storybook/vue';

import * as components from './components/index';

const SbComponents = {
  install: Vue => {
    Object.keys(components).forEach(componentName => {
      Vue.component(componentName, components[componentName]);
    });
  },
};

Vue.use(SbComponents);

const req = require.context('./', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
