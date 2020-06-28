/**
 * A simple utility for checking JavaScript types for people who don't want to
 * use complicated solutions like TypeScript or Flow.
 */

// -----------------------------------------------------------------------------

import types from './types'

// Interface for default exports.
const rightType = {
  ...types,
}

// Make exports compatible with both ES6 and Node.
export default rightType
module.exports = rightType
