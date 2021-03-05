const {execSync} = require('child_process');

const os = process.platform;
const coveragePath = './coverage/index.html';

/**
 * Cross-platform commands for openning file in default browser.
 * If you use other OS besiders Windows, Mac OS, or Linux, add it to the list.
 */
switch (os) {
  case 'win32': execSync(`start ${coveragePath}`); break;
  case 'darwin': execSync(`open ${coveragePath}`); break;
  case 'linux': execSync(`xdg-open ${coveragePath}`); break;
  default: console.error('Your OS is not supported for openning coverage file!'); break;
}
