// import types for vitest config autocomplete
/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config';

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
    target: ['es2024']
  },
  test: {
    // Debugging Tests
    // testTimeout: 0,
    // fileParallelism: false,

    // globals: true,
    // includeSource: ['src/**/*.{js,ts}'], // enable inline tests
    pool: 'forks',
    setupFiles: ['./scripts/setup-vitest.js'],
    sequence: {
      hooks: 'list'
    },
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html'],
      exclude: [
        ...configDefaults.coverage.exclude,
        // entries that skew coverage reports below
        'scripts/**'
      ]
    }
  }
});
