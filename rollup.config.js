import pkg from './package.json'

import typescript from 'rollup-plugin-typescript2'

const banner = `/* ${pkg.name} version: ${pkg.version} */`

const standardOpts = {
  name: pkg.name,
  banner,
  exports: 'named',
  minifyInternalExports: true,
  preserveModules: true,
}

const config = [
  {
    input: './src/index.ts',
    strictDeprecations: true,
    output: [
      { ...standardOpts, dir: 'dist', format: 'cjs' },
      { ...standardOpts, dir: 'dist/esm', format: 'esm' },
    ],
    external: [...Object.keys(pkg.dependencies), 'react/jsx-runtime'],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        tsconfigOverride: {
          rootDir: 'src',
          include: ['src/**/*.ts', 'src/**/*.tsx'],
          exclude: ['**/example*'],
        },
      }),
    ],
  },
]

export default config
