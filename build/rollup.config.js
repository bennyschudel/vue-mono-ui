import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/entry.js',
  external: ['d3', 'lodash', 'vue', 'vue-drag-drop'],
  output: {
    name: 'VueMonoUi',
    exports: 'named',
    globals: {
      d3: 'd3',
      lodash: '_',
      vue: 'Vue',
      'vue-drag-drop': 'VueDragDrop',
    },
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true,
      },
    }),
    buble({
      objectAssign: 'Object.assign',
    }),
    resolve(),
  ],
};

if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

export default config;
