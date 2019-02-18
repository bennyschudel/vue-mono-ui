import Vue from 'vue';

import MonoUi from '../entry';

import Demo from './Demo.vue';

Vue.use(MonoUi);

Vue.config.productionTip = false;

new Vue(Demo).$mount('#app');
