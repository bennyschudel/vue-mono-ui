import { configure } from '@storybook/vue';

import Vue from 'vue';
import MonoUi from '../src/entry.js';

Vue.use(MonoUi);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
