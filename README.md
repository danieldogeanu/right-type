# Right Type

A simple utility for checking JavaScript types for people who don't want to use complicated solutions like TypeScript or Flow.

## Motivation

I kept finding myself doing the same type of validation logic over and over in some of my projects and I thought I should extract it into a separate package and use it on all of my projects or maybe to even help others.

Now, you might say that this kind of type validation is already built in into JavaScript and that I should use that instead. And you'd be right, except I like to keep things simple and readable. I find all those validation checks really ugly and confusing, so I like to build a validation utility file in my projects and keep all that logic hidden away.

In fact I recommend you doing the same. You can install this package, import it into that file, and build more complex validation logic there. You can then re-export the methods from this package along with your own, and import that file all over your project, where you need validation.

Also, this is **_NOT_** a form validation package! In fact this is also a reason I created this package. Most validation packages out there are form validators, not type validators.

## Installation

To install this package, simply run the command bellow in your terminal:

```
npm install right-type
```

## Getting Started

### Importing

To use this package, you import it in your files like so:
```
// CommonJS
const rightType = require('right-type')

// ES6 Modules
import rightType from 'right-type'
```

Or if you don't need all the methods exported by the package, you can use the destructuring syntax, to import only one or a few methods:
```
// CommonJS with Single Method
const isString = require('right-type).isString

// CommonJS with Destructuring
const {isString, isNumber, isObject} = require('right-type')

// ES6 Modules with Destructuring
import {isString, isNumber, isObject} from 'right-type'
```

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
