/**
 * A simple utility for checking JavaScript types for people who don't want to
 * use complicated solutions like TypeScript or Flow.
 */

// -----------------------------------------------------------------------------

/**
 * Check to see if the value provided is a string.
 * By default it also checks to see if the string is empty and returns false if it is.
 * @param {string} string The value to be tested.
 * @param {boolean} empty Whether to allow empty strings or not.
 */
export function isString(string, empty = false) {
  return (!empty) ?
    (typeof string === 'string' && string !== '') :
    (typeof string === 'string')
}

// Interface for default exports.
const rightType = {
  isString,
}

// Make exports compatible with both ES6 and Node.
export default rightType
module.exports = rightType
