const { build } = require('esbuild')
const cssModulesPlugin = require('esbuild-css-modules-plugin')

const { dependencies, peerDependencies = {} } = require('../package.json')

build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist/esm',
  bundle: true,
  splitting: true,
  minify: true,
  tsconfig: './tsconfig.json',
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  // outfile: 'dist/index.js',
  // platform: 'neutral', // for ESM
  format: 'esm',
  target: ['esnext', 'node12.22.0'],
  // inject: ['react-shim.js'],
  plugins: [
    cssModulesPlugin({
      localsConvention: 'dashes',
    }),
  ],
})
  .then(() => console.log('build ESM -> dist/index.js'))
  .catch(() => process.exit(1))
