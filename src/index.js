/**
 * A simple utility for checking JavaScript types for people who don't want to
 * use complicated solutions like TypeScript or Flow.
 */

// -----------------------------------------------------------------------------

/**
 * Check to see if the value provided is a string.
 * By default it also checks to see if the string is empty and returns false if it is.
 * @param {string} string The value to be tested.
 * @param {boolean} allowEmpty Whether to allow empty strings or not.
 */
export function isString(string, allowEmpty = false) {
  return (allowEmpty) ? (typeof string === 'string') :
    (typeof string === 'string' && string !== '')
}

/**
 * Check to see if the value provided is a number.
 * By default it also checks to see it the number is not zero and returns false if it is.
 * @param {number} number The value to be tested.
 * @param {boolean} allowEmpty Whether to allow zero or not.
 */
export function isNumber(number, allowEmpty = false) {
  return (allowEmpty) ? (typeof number === 'number' && !isNaN(number)) :
    (typeof number === 'number' && !isNaN(number) && number !== 0)
}

// -----------------------------------------------------------------------------

// Interface for default exports.
const rightType = {
  isString,
  isNumber,
}

// Make exports compatible with both ES6 and Node.
export default rightType
module.exports = rightType
