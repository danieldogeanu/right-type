const chalk = require('chalk')
const expect = require('chai').expect
const {makeTitle, sectionSpacing} = require('./helper')
const types = require('../src/types')

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
    const titleText = `returns ${typeMatcher(type, chosenType)} for ${chosenType}`
    it(typeMatcher(type, chosenType) ? chalk.green(titleText) : titleText, () => {
      expect(method(testValue)).to.equal(typeMatcher(type, chosenType))
    })
  }
  const runEmptyTestFor = (chosenType, testValue) => {
    it(chalk.green(`returns true for ${getEmptyWord(chosenType)} ${chosenType} with allowEmpty flag set to true`), () => {
      expect(method(testValue, true)).to.equal(true)
    })
    it(`returns false for ${getEmptyWord(chosenType)} ${chosenType} with allowEmpty flag set to false`, () => {
      expect(method(testValue, false)).to.equal(false)
    })
  }

  const allTypes = {
    undefined: undefined,
    null: null,
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
    runBatchTypeTests('string', types.isString)
    sectionSpacing()
  })

  describe('isNumber()', () => {
    runBatchTypeTests('number', types.isNumber)
    sectionSpacing()
  })

  describe('isBoolean()', () => {
    runBatchTypeTests('boolean', types.isBoolean)
    it(chalk.green('returns true for false boolean'), () => {
      expect(types.isBoolean(false)).to.equal(true)
    })
    sectionSpacing()
  })

  describe('isArray()', () => {
    runBatchTypeTests('array', types.isArray)
    sectionSpacing()
  })

  describe('isObject()', () => {
    runBatchTypeTests('object', types.isObject)
    sectionSpacing()
  })

  describe('isFunction()', () => {
    runBatchTypeTests('function', types.isFunction)
    sectionSpacing()
  })

})

