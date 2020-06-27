import {expect} from 'chai'
import {makeTitle, sectionSpacing} from './helper.spec'
import rightType from './index'

/**
 * Function that creates and runs batch tests for all primitive JavaScript types.
 * @param {string} type The name of the type to return true for.
 * @param {function} method The function/method to batch tests against.
 */
function runBatchTypeTests(type, method) {
  if (typeof type !== 'string' && typeof method !== 'function') return

  const typeMatcher = (passed, expected) => (passed === expected)
  const runTestFor = (chosenType, testValue) => {
    it(`returns ${typeMatcher(type, chosenType)} for ${chosenType}`, () => {
      expect(method(testValue)).to.equal(typeMatcher(type, chosenType))
    })
  }

  const allTypes = {
    undefined: undefined,
    boolean: true,
    number: 543,
    string: 'test string',
    bigint: 23n,
    symbol: Symbol('Test'),
    array: [1, 2, 3],
    object: {one: 1, two: 2, three: 3},
    function: () => true,
  }

  Object.keys(allTypes).forEach(type => {
    runTestFor(type, allTypes[type])
  })
}

// TESTS -----------------------------------------------------------------------

describe(makeTitle('Right Type'), () => {

  describe('isString()', () => {

    runBatchTypeTests('string', rightType.isString)

    it('returns true for empty string with empty flag set to true', () => {
      expect(rightType.isString('', true)).to.equal(true)
    })

    it('returns false for empty string with empty flag set to false', () => {
      expect(rightType.isString('', false)).to.equal(false)
    })

    sectionSpacing()

  })

  describe('isNumber()', () => {

    runBatchTypeTests('number', rightType.isNumber)

    it('returns true for zero with empty flag set to true', () => {
      expect(rightType.isNumber(0, true)).to.equal(true)
    })

    it('returns false for zero with empty flag set to false', () => {
      expect(rightType.isNumber(0, false)).to.equal(false)
    })

    sectionSpacing()

  })

})

