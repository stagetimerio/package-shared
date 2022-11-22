import { defineConfig } from 'vite'
// import rollupPluginNodePolyfills from 'rollup-plugin-node-polyfills'

export default defineConfig({
  // resolve: {
  //   alias: {
  //     // Fix: Cannot access "util.inherits" in client code (jsonwebtoken)
  //     util: 'rollup-plugin-node-polyfills/polyfills/util',
  //   },
  // },
  build: {
    // ssr: true,
    // target: 'node16',
    target: ['es2016', 'chrome84', 'firefox70', 'safari13.1', 'edge84'],
    outDir: 'dist',
    assetsDir: '.',
    minify: false,
    lib: {
      entry: 'index.js',
      formats: ['es', 'cjs'],
    },
    emptyOutDir: true,
    reportCompressedSize: false,
    // rollupOptions: {
    //   plugins: [
    //     // Enable rollup polyfills plugin
    //     // used during production bundling
    //     rollupPluginNodePolyfills(),
    //   ],
    // },
  },
})
