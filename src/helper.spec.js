import {expect} from 'chai'

// Helper Functions for Tests
// NOTE: We named this file .spec.js because we don't want it included in the final package.
// -----------------------------------------------------------------------------



/**
 * Function that makes fancy titles for tests.
 * It adds dashes and new line character at the end of the string.
 * @param {string} title The title you wish to format.
 * @returns {string} Returns a fancy title string.
 */
export function makeTitle(title) {
  const dash = '-'
  const line = dash.repeat(50 - title.split('').length)
  return `${title} ${line}\n`
}


/**
 * Function that adds new line after each describe section.
 * This is only to make tests more readable in the console.
 */
export function sectionSpacing() {
  after(() => console.log('\n'))
}


/**
 * Function that creates and runs batch tests for all primitive JavaScript types.
 * @param {string} type The name of the type to return true for.
 * @param {function} method The function/method to batch tests against.
 */
export function runBatchTypeTests(type, method) {
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

// -----------------------------------------------------------------------------

export default {
  makeTitle,
  sectionSpacing,
  runBatchTypeTests,
}
