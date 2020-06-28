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

/**
 * Check to see if the value provided is a boolean.
 * @param {boolean} boolean The value to be tested.
 */
export function isBoolean(boolean) {
  return (typeof boolean === 'boolean')
}

/**
 * Check to see if the value provided is an array.
 * By default it also checks to see if the array is not empty and returns false if it is.
 * @param {array} array The value to be tested.
 * @param {boolean} allowEmpty Whether to allow empty array or not.
 */
export function isArray(array, allowEmpty = false) {
  return (allowEmpty) ? Array.isArray(array) :
    (Array.isArray(array) && array.length > 0)
}

/**
 * Check to see if the value provided is an object.
 * By default it also checks to see if the object is not empty and returns false if it is.
 * @param {object} object The value to be tested.
 * @param {boolean} allowEmpty Whether to allow empty object or not.
 */
export function isObject(object, allowEmpty = false) {
  if (object === null || object === undefined) return false
  const isValidObject = (typeof object === 'object')
  const isNotEmptyObject = (Object.keys(object).length > 0 && object.constructor === Object)
  return (allowEmpty) ? isValidObject : (isValidObject && isNotEmptyObject)
}

// -----------------------------------------------------------------------------

// Interface for default exports.
const rightType = {
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
}

// Make exports compatible with both ES6 and Node.
export default rightType
module.exports = rightType
