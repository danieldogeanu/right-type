[![npm](https://img.shields.io/npm/v/right-type?color=%231E88E5&label=right-type&style=flat-square)](https://www.npmjs.com/package/right-type)
[![node-current](https://img.shields.io/node/v/right-type?color=%2368A063&style=flat-square)](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V6.md#6.17.1)
[![NPM](https://img.shields.io/npm/l/right-type?style=flat-square)](https://github.com/danieldogeanu/right-type/blob/main/LICENSE)

# Right Type

A simple utility for checking JavaScript types for people who don't want to use complicated solutions like TypeScript or Flow.

<br />

## Motivation

I kept finding myself doing the same type of validation logic over and over in some of my projects and I thought I should extract it into a separate package and use it on all of my projects or maybe to even help others.

Now, you might say that this kind of type validation is already built in into JavaScript and that I should use that instead. And you'd be right, except I like to keep things simple and readable. I find all those validation checks really ugly and confusing, so I like to build a validation utility file in my projects and keep all that logic hidden away.

In fact I recommend you doing the same. You can install this package, import it into that file, and build more complex validation logic there. You can then re-export the methods from this package along with your own, and import that file all over your project, where you need validation.

Also, this is **_NOT_** a form validation package! In fact this is also a reason I created this package. Most validation packages out there are form validators, not type validators.

<br />

## Getting Started

### Installation

To install this package, simply run the command bellow in your terminal:

```
npm install right-type
```

### Importing

To use this package, you import it in your files like so:
```
// CommonJS
const rightType = require('right-type')

// ES Modules
import rightType from 'right-type'
```

Or if you don't need all the methods exported by the package, you can use the destructuring syntax, to import only one or a few methods:
```
// CommonJS with Single Method
const isString = require('right-type).isString

// CommonJS with Destructuring
const {isString, isNumber, isObject} = require('right-type')

// ES Modules with Destructuring
import {isString, isNumber, isObject} from 'right-type'
```

In order to use the ES Modules `import` syntax, you need to add `"type": "module"` field in your `package.json` and run your program using the `--experimental-modules` flag:

```
// package.json
{
  "name": "my-package",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node --experimental-modules index.js",
    ...
  },
  ...
}
```

*NOTE 1: You need Node version 12.0.0 and above to use `--experimental-modules` flag. If you're using version 12.17.0 (LTS), the flag isn't needed anymore and you can just add `"type": "module"` in your `package.json`.*

*NOTE 2: If you're using Webpack and Babel, you don't need to worry about using the `import` syntax.*

*NOTE 3: Import destructuring (`import {isString} from 'right-type'`) only works if you use Webpack and Babel, as this is by default a CommonJS package and doesn't have named exports.*

### Usage

And later in your code you can use it like so:
```
if (isString(str)) {
  // do something
}

if (rightType.isObject(obj)) {
  // do something
}
```

Some methods also have an `allowEmpty` parameter, which is by default set to `false`. If you set it to `true`, it allows for *empty* values, like empty strings (`''`), zero for numbers (`0`), and also empty arrays (`[]`) or objects (`{}`):
```
isString('') // false
isString('', true) // true

isNumber(0) // false
isNumber(0, true) // true

isArray([]) // false
isArray([], true) // true

isObject({}) // false
isObject({}, true) // true
```

By default these methods don't allow for empty values, but in some cases you might need to use empty values in your code. The `allowEmpty` parameter is not present on all methods, because on some of them it doesn't make any sense to have one.

<br />

## Methods

### Types

<br />

#### `isString( string: any, allowEmpty?: boolean ): boolean`

Method that checks to see if the value provided is a string. By default it also checks to see if the string is empty and returns false if it is.

- `string: any` - The value to be tested.
- `allowEmpty?: boolean` (optional) - Whether to allow empty strings or not. Default value is `false`.

<br />

#### `isNumber( number: any, allowEmpty?: boolean ): boolean`

Method that checks to see if the value provided is a number. By default it also checks to see it the number is not zero and returns false if it is.

- `number: any` - The value to be tested.
- `allowEmpty?: boolean` (optional) - Whether to allow zero or not. Default value is `false`.

<br />

#### `isBoolean( boolean: any ): boolean`

Method that checks to see if the value provided is a boolean.

- `boolean: any` - The value to be tested.

<br />

#### `isArray( array: any, allowEmpty?: boolean ): boolean`

Method that checks to see if the value provided is an array. By default it also checks to see if the array is not empty and returns false if it is.

- `array: any` - The value to be tested.
- `allowEmpty?: boolean` (optional) - Whether to allow empty array or not. Default value is `false`.

<br />

#### `isObject( object: any, allowEmpty?: boolean ): boolean`

Method that checks to see if the value provided is an object. By default it also checks to see if the object is not empty and returns false if it is.

- `object: any` - The value to be tested.
- `allowEmpty?: boolean` (optional) - Whether to allow empty object or not. Default value is `false`.

<br />

#### `isFunction( func: any ): boolean`

Method that checks to see if the value provided is a function.

- `func: any` - The value to be tested.

<br />
