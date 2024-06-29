/**
 * @file Unit Tests - u
 * @module unist-util-builder/tests/unit/u
 */

import testSubject from '../u'

describe('unit:u', () => {
  it('should build leaf if builder is undefined', () => {
    expect(testSubject('root')).toMatchSnapshot()
  })

  describe('children builder', () => {
    it('should build parent', () => {
      expect(testSubject('root', [])).toMatchSnapshot()
    })
  })

  describe('properties builder', () => {
    it('should build node', () => {
      expect(testSubject('undefined', { value: undefined })).toMatchSnapshot()
    })
  })

  describe('value builder', () => {
    describe('bigint', () => {
      it('should build literal', () => {
        expect(testSubject('bigint', 3n)).toMatchSnapshot()
      })
    })

    describe('boolean', () => {
      it('should build literal', () => {
        expect(testSubject('boolean', true)).toMatchSnapshot()
      })
    })

    describe('null', () => {
      it('should build literal', () => {
        expect(testSubject('null', null)).toMatchSnapshot()
      })
    })

    describe('number', () => {
      it('should build literal', () => {
        expect(testSubject('number', 3)).toMatchSnapshot()
      })
    })

    describe('string', () => {
      it('should build literal', () => {
        expect(testSubject('string', 'node')).toMatchSnapshot()
      })
    })
  })
})
