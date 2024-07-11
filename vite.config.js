// import types for vitest config autocomplete
/// <reference types="vitest" />

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.m4a'], // additional asset types
  // define: {
  //   // ensure inline tests are removed in production builds
  //   'import.meta.vitest': 'undefined',
  // },
  // plugins: [vue()],
  worker: {
    format: 'es'
  },
  build: {
    target: ['es2022']
  },
  test: {
    // globals: true,
    setupFiles: ['./scripts/vitest-setup.js']
    // includeSource: ['src/**/*.{js,ts}'], // enable inline tests
  }
});
