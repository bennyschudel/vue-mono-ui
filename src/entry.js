/* global window global */
import * as components from './components/index.js';

function install(Vue) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  Object.keys(components).forEach(componentName => {
    Vue.component(componentName, components[componentName]);
  });
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;

export { default as Color } from './core/Color.js';
export { default as Colors } from './core/Colors.js';
export { default as ColorList } from './core/ColorList.js';

export * from './components/index';
