import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/util.min.js',
      name: 'util',
      format: 'umd',
      sourcemap: false,
    },
    plugins: [
      resolve(),
      typescript(),
      commonjs(),
      terser(),
    ],
  },
];
