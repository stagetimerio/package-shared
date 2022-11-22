import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      // Fix: Cannot access "util.inherits" in client code (jsonwebtoken)
      util: 'rollup-plugin-node-polyfills/polyfills/util',
    },
  },
  build: {
    ssr: true,
    target: 'node16',
    outDir: 'dist',
    assetsDir: '.',
    minify: false,
    lib: {
      entry: 'index.js',
      formats: ['es', 'cjs'],
      name: 'Server',
    },
    emptyOutDir: true,
    reportCompressedSize: false,
  },
})
