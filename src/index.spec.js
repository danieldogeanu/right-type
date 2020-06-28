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
  const getEmptyWord = (checkType) => {
    switch(checkType) {
      case 'number': return 'zero'
      default: return 'empty'
    }
  }

  const runTestFor = (chosenType, testValue) => {
    it(`returns ${typeMatcher(type, chosenType)} for ${chosenType}`, () => {
      expect(method(testValue)).to.equal(typeMatcher(type, chosenType))
    })
  }
  const runEmptyTestFor = (chosenType, testValue) => {
    it(`returns true for ${getEmptyWord(chosenType)} ${chosenType} with allowEmpty flag set to true`, () => {
      expect(method(testValue, true)).to.equal(true)
    })
    it(`returns false for ${getEmptyWord(chosenType)} ${chosenType} with allowEmpty flag set to false`, () => {
      expect(method(testValue, false)).to.equal(false)
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
  const emptyTypes = {
    number: 0,
    string: '',
    array: [],
    object: {},
  }

  Object.keys(allTypes).forEach(currType => {
    runTestFor(currType, allTypes[currType])
  })
  Object.keys(emptyTypes).forEach(currType => {
    if (typeMatcher(currType, type)) {
      runEmptyTestFor(currType, emptyTypes[currType])
    }
  })
}

// TESTS -----------------------------------------------------------------------

describe(makeTitle('Right Type'), () => {

  describe('isString()', () => {
    runBatchTypeTests('string', rightType.isString)
    sectionSpacing()
  })

  describe('isNumber()', () => {
    runBatchTypeTests('number', rightType.isNumber)
    sectionSpacing()
  })

  describe('isBoolean()', () => {
    runBatchTypeTests('boolean', rightType.isBoolean)
    it('returns true for false boolean', () => {
      expect(rightType.isBoolean(false)).to.equal(true)
    })
    sectionSpacing()
  })

  describe('isArray()', () => {
    runBatchTypeTests('array', rightType.isArray)
    sectionSpacing()
  })

})

