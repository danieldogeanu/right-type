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

// -----------------------------------------------------------------------------

export default {
  makeTitle,
  sectionSpacing,
}
