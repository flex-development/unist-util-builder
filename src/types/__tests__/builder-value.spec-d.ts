/**
 * @file Type Tests - BuilderValue
 * @module unist-util-builder/tests/types/unit-d/BuilderValue
 */

import type TestSubject from '../builder-value'

describe('unit-d:types/BuilderValue', () => {
  it('should extract bigint', () => {
    expectTypeOf<TestSubject>().extract<bigint>().not.toBeNever()
  })

  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().not.toBeNever()
  })

  it('should extract number', () => {
    expectTypeOf<TestSubject>().extract<number>().not.toBeNever()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().not.toBeNever()
  })
})
