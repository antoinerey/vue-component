import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.vue',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'vue-component'
  },
  plugins: [
    json(),
    vue({ css: true }),
    resolve(),
    commonjs()
  ]
}
