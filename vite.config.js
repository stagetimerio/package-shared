import { defineConfig } from 'vite'

export default defineConfig({
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
