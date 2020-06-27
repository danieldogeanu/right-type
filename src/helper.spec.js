// Helper Functions for Tests

/**
 * Function that makes fancy titles for tests.
 * It adds dashes and new line character at the end of the string.
 * @param {string} title The title you wish to format.
 * @returns {string} Returns a fancy title string.
 */
export function makeTitle(title) {
  const dash = '-';
  const line = dash.repeat(50 - title.split('').length);
  return `${title} ${line}\n`;
}

// -----------------------------------------------------------------------------

export default {
  makeTitle,
}
