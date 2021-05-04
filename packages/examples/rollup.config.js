import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { visualizer } from 'rollup-plugin-visualizer';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default [
  // slim builds without any dependencies included
  {
    input: './src/index.ts',
    external: [
      'ajv-i18n', '@jsonforms/core', 'moment'
    ],
    output: [
      // {
      //   file: packageJson.main,
      //   format: 'cjs',
      //   sourcemap: true
      // },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      visualizer()
    ]
  },
  // full build containing all dependencies except JSON FOrms
  // {
  //   input: 'src/index.ts',
  //   external: ['@jsonforms/core', 'react'],
  //   output: [
  //     {
  //       file: packageJson.unpkg,
  //       format: 'umd',
  //       sourcemap: true,
  //       name: 'JSONFormsReact',
  //       globals: {
  //         react: 'React',
  //         '@jsonforms/core': 'JSONFormsCore'
  //       }
  //     }
  //   ],
  //   plugins: [
  //     json(),
  //     nodePolyfills(),
  //     resolve(),
  //     commonjs(),
  //     typescript({ useTsconfigDeclarationDir: true }),
  //     terser(),
  //     visualizer()
  //   ]
  // }
];