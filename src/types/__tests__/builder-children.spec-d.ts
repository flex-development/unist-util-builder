/**
 * @file Type Tests - BuilderChildren
 * @module unist-util-builder/tests/types/unit-d/BuilderChildren
 */

import type * as docast from '@flex-development/docast'
import type TestSubject from '../builder-children'

describe('unit-d:types/BuilderChildren', () => {
  it('should equal T[]', () => {
    // Arrange
    type T = docast.PhrasingContent

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T[]>()
  })
})
