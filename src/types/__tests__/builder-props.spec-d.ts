/**
 * @file Type Tests - BuilderProps
 * @module unist-util-builder/tests/types/unit-d/BuilderProps
 */

import type TestSubject from '../builder-props'

describe('unit-d:types/BuilderProps', () => {
  it('should equal { [x: string]: unknown }', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<{ [x: string]: unknown }>()
  })
})
