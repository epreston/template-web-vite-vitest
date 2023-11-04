// global.d.ts

/// <reference types="vite/client" />

// for tests
import type { Assertion, AsymmetricMatchersContaining } from 'vitest';

// custom matchers for tests
interface CustomMatchers<R = unknown> {
  toHaveBeenWarned(): R;
  toHaveBeenWarnedLast(): R;
  toHaveBeenWarnedTimes(n: number): R;
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

// additional import types not included in vite/client
// declare module '*.m4a' {
//   const src: string
//   export default src
// }

// declare module '*.glb' {
//   const src: string
//   export default src
// }

// declare module '*.gltf' {
//   const src: string
//   export default src
// }

// declare module '*.vue' {}
