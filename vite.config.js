// vite.config.js

// import types for vitest config autocomplete
/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  // assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.m4a'], // additional asset types
  // define: {
  //   // ensure inline tests are removed in production builds
  //   'import.meta.vitest': 'undefined',
  // },
  // server: {
  //   open: '/index.html',
  // },
  // plugins: [vue(), splitVendorChunkPlugin()],
  test: {
    setupFiles: ['./test/setup.js'],
    // includeSource: ['src/**/*.{js,ts}'], // enable inline tests
  },
});
