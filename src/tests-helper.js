// Helper Functions for Tests
// -----------------------------------------------------------------------------


/**
 * Function that makes fancy titles for tests.
 * It adds dashes and new line character at the end of the string.
 * @param {string} title The title you wish to format.
 * @returns {string} Returns a fancy title string.
 */
function makeTitle(title) {
  const dash = '-'
  const line = dash.repeat(50 - title.split('').length)
  return `${title} ${line}\n`
}


/**
 * Function that adds new line after each describe section.
 * This is only to make tests more readable in the console.
 */
function sectionSpacing() {
  after(() => console.log('\n'))
}

// -----------------------------------------------------------------------------

module.exports = {
  makeTitle,
  sectionSpacing,
}
