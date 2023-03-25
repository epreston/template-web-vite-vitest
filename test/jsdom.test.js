// @vitest-environment jsdom

import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

// ---------------------------------------------------------

// import { itemsToMock } from '../src/testDependency.js';

// ---------------------------------------------------------

// vi.mock('../src/testDependency.js');

// ---------------------------------------------------------

// import { itemBeingTested } from '../src/testTarget.js';

// ---------------------------------------------------------

describe('JSDom Test Environment', () => {
  it('is working as expected', () => {
    expect(document).toBeDefined();
    expect(window).toBeDefined();

    const divEl = document.createElement('div');

    expect(divEl).toBeDefined();
  });
});
