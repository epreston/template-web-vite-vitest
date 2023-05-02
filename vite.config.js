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
  build: {
    target: ['es2022', 'edge111', 'firefox111', 'chrome111', 'safari16.3', 'ios16.3'],
  },
  test: {
    // globals: true,
    // disable threads on GH actions to speed it up
    threads: !process.env.GITHUB_ACTIONS,
    setupFiles: ['./scripts/vitest-setup.js'],
    // includeSource: ['src/**/*.{js,ts}'], // enable inline tests
  },
});
