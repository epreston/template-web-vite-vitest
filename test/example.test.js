import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

// ---------------------------------------------------------

// import { itemsToMock } from '../src/testDependency.js';

// ---------------------------------------------------------

// vi.mock('../src/testDependency.js');

// ---------------------------------------------------------

// import { itemBeingTested } from '../src/testTarget.js';

// ---------------------------------------------------------

const props = {
  foo: vi.fn(),
  bar: {
    baz: true
  }
};

// ---------------------------------------------------------

describe('Object', () => {
  let instance;

  beforeAll(() => {
    instance = Object.assign({}, props);
  });

  // beforeEach(() => {
  //   instance = Object.assign({}, props);
  // });

  it('should expose an object', () => {
    expect(instance).toBeDefined();
    expect(instance).toBeInstanceOf(Object);
  });

  it('should have the expected properties', () => {
    expect(instance).toHaveProperty('bar');
  });

  it('should have a method foo()', () => {
    // instance.foo();
    expect(instance.foo).toBeDefined();

    instance.foo();
    expect(instance.foo).toHaveBeenCalled();
  });

  it('should load and configure the object correctly', () => {
    expect(instance).toMatchSnapshot();
  });
});
