/**
 * @file Type Tests - AnyBuilder
 * @module unist-util-builder/tests/types/unit-d/AnyBuilder
 */

import type TestSubject from '../any-builder'
import type BuilderChildren from '../builder-children'
import type BuilderProps from '../builder-props'
import type BuilderValue from '../builder-value'

describe('unit-d:types/AnyBuilder', () => {
  it('should extract BuilderChildren', () => {
    expectTypeOf<TestSubject>().extract<BuilderChildren>().not.toBeNever()
  })

  it('should extract BuilderProps', () => {
    expectTypeOf<TestSubject>().extract<BuilderProps>().not.toBeNever()
  })

  it('should extract BuilderValue', () => {
    expectTypeOf<TestSubject>().extract<BuilderValue>().not.toBeNever()
  })
})
