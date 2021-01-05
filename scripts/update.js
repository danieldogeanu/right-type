const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const packageJSON = require('../package.json');


// Find paths.
const NODE_MODULES_PATH = path.resolve(__dirname, '../node_modules');
const PACKAGE_LOCK_PATH = path.resolve(__dirname, '../package-lock.json');
const PACKAGE_JSON_PATH = path.resolve(__dirname, '../package.json');

// Extract dependencies.
const {dependencies = {}, devDependencies = {}} = packageJSON;
const savedDependencies = Object.keys(dependencies);
const savedDevDependencies = Object.keys(devDependencies);

// Delete existing dependencies.
const newPackageJSON = {...packageJSON};
delete newPackageJSON.dependencies;
delete newPackageJSON.devDependencies;
const changedPackageJSON = JSON.stringify(newPackageJSON, null, 2);

// Delete package-lock.json file.
try {
  fs.unlinkSync(PACKAGE_LOCK_PATH);
  console.log('package-lock.json deleted successfully');
} catch (err) {
  console.error(err.name, err.message);
}

// Delete node_modules folder.
try {
  fs.rmdirSync(NODE_MODULES_PATH, {recursive: true});
  console.log('node_modules deleted successfully');
} catch (err) {
  console.error(err.name, err.message);
}

// Rewrite the package.json contents.
try {
  fs.writeFileSync(PACKAGE_JSON_PATH, changedPackageJSON);
  console.log('deleted existing dependencies from package.json');
} catch (err) {
  console.error(err.name, err.message);
}

// Reinstall and save dependencies.
if (savedDependencies.length > 0) {
  try {
    console.log('reinstalling dependencies...');
    cp.execSync(`npm install ${savedDependencies.join(' ')} --save`);
  } catch (err) {
    console.error(err.name, err.message);
  }
}

// Reinstall and save dev dependencies.
if (savedDevDependencies.length > 0) {
  try {
    console.log('reinstalling dev dependencies...');
    cp.execSync(`npm install ${savedDevDependencies.join(' ')} --save-dev`);
  } catch (err) {
    console.error(err.name, err.message);
  }
}
