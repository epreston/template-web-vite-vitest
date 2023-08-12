// global.d.ts

/// <reference types="vite/client" />

// for tests
declare namespace jest {
  interface Matchers<R, T> {
    toHaveBeenWarned(): R;
    toHaveBeenWarnedLast(): R;
    toHaveBeenWarnedTimes(n: number): R;
  }
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
