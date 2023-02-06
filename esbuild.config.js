const builder = require('esbuild')

const res = builder.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  platform: 'node',
  target: 'node14',
  minify: true,
  format: 'cjs',
  sourcemap: false
})
