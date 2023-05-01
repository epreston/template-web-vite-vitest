import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

// ---------------------------------------------------------

// Example Worker Test

import '@vitest/web-worker';
// import { defineWebWorkers } from '@vitest/web-worker/pure';
// defineWebWorkers({ clone: 'none' });

// ---------------------------------------------------------

describe('#worker', () => {
  it('works like the example', async () => {
    expect.assertions(1);

    const worker = new Worker(new URL('../src/worker.js', import.meta.url));

    await new Promise((resolve) => {
      worker.postMessage('hello');

      worker.onmessage = (e) => {
        expect(e.data).toBe('hello world');

        resolve();
      };
    });
  });
});
