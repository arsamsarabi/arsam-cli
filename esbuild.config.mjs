import * as esbuild from 'esbuild'

const config = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  platform: 'node',
  target: 'node18',
  minify: true,
  format: 'esm',
  sourcemap: true,
  banner: {
    js: '#!/usr/bin/env node'
  },
  external: [],
  treeShaking: true,
  splitting: false,
  metafile: false
}

async function build() {
  try {
    await esbuild.build(config)
    console.log('✓ Build completed successfully')
  } catch (error) {
    console.error('✗ Build failed:', error)
    process.exit(1)
  }
}

build()
