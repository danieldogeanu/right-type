// Type Checking Functions
// -----------------------------------------------------------------------------

/**
 * Check to see if the value provided is a string.
 * By default it also checks to see if the string is empty and returns false if it is.
 * @param {any} string The value to be tested.
 * @param {boolean} allowEmpty Whether to allow empty strings or not.
 */
function isString(string, allowEmpty = false) {
  return (allowEmpty) ? (typeof string === 'string') :
    (typeof string === 'string' && string !== '')
}

/**
 * Check to see if the value provided is a number.
 * By default it also checks to see it the number is not zero and returns false if it is.
 * @param {any} number The value to be tested.
 * @param {boolean} allowEmpty Whether to allow zero or not.
 */
function isNumber(number, allowEmpty = false) {
  return (allowEmpty) ? (typeof number === 'number' && !isNaN(number)) :
    (typeof number === 'number' && !isNaN(number) && number !== 0)
}

/**
 * Check to see if the value provided is a boolean.
 * @param {any} boolean The value to be tested.
 */
function isBoolean(boolean) {
  return (typeof boolean === 'boolean')
}

/**
 * Check to see if the value provided is an array.
 * By default it also checks to see if the array is not empty and returns false if it is.
 * @param {any} array The value to be tested.
 * @param {boolean} allowEmpty Whether to allow empty array or not.
 */
function isArray(array, allowEmpty = false) {
  return (allowEmpty) ? Array.isArray(array) :
    (Array.isArray(array) && array.length > 0)
}

/**
 * Check to see if the value provided is an object.
 * By default it also checks to see if the object is not empty and returns false if it is.
 * @param {any} object The value to be tested.
 * @param {boolean} allowEmpty Whether to allow empty object or not.
 */
function isObject(object, allowEmpty = false) {
  if (object === null || object === undefined) return false
  const isValidObject = (typeof object === 'object')
  const isNotEmptyObject = (Object.keys(object).length > 0 && object.constructor === Object)
  return (allowEmpty) ? isValidObject : (isValidObject && isNotEmptyObject)
}

/**
 * Check to see if the value provided is a function.
 * @param {any} func The value to be tested.
 */
function isFunction(func) {
  return ((typeof func === 'function') || (func instanceof Function) ||
    (Object.prototype.toString.call(func).indexOf("Function") > -1))
}

// -----------------------------------------------------------------------------

module.exports = {
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
  isFunction,
}
