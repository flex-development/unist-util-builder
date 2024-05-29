/**
 * @file Type Tests - Builder
 * @module unist-util-builder/tests/types/unit-d/Builder
 */

import type * as docast from '@flex-development/docast'
import type { Children } from '@flex-development/unist-util-types'
import type * as mdast from 'mdast'
import type TestSubject from '../builder'
import type BuilderValue from '../builder-value'

describe('unit-d:types/Builder', () => {
  it('should extract Extract<MatchValue<N, Type<N>>, BuilderValue>', () => {
    // Arrange
    type N = { type: string; value: BuilderValue | Date }

    // Expect
    expectTypeOf<TestSubject<N>>().extract<Date>().toBeNever()
  })

  it('should extract MatchChildren<N, Type<N>>', () => {
    // Arrange
    type N = docast.Root

    // Expect
    expectTypeOf<TestSubject<N>>().extract<Children<N>>().not.toBeNever()
  })

  it('should extract MatchProperties<N, Type<N>>', () => {
    // Arrange
    type N = mdast.Code

    // Expect
    expectTypeOf<TestSubject<N>>().extract<Omit<N, 'type'>>().not.toBeNever()
  })
})
