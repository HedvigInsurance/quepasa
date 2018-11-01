import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const plugins = [
  typescript({
    exclude: ['node_modules', '**/*.test.ts'],
  }),
  resolve(),
  terser(),
  commonjs(),
]
const external = ['react']

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'package',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: plugins,
    external
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkg.main, format: 'cjs' }],
    plugins: plugins,
    external
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkg.module, format: 'es' }],
    plugins: plugins,
    external
  },
]
