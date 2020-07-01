# Right Type

A simple utility for checking JavaScript types for people who don't want to use complicated solutions like TypeScript or Flow.

## Motivation

I kept finding myself doing the same type of validation logic over and over in some of my projects and I thought I should extract it into a separate package and use it on all of my projects or maybe to even help others.

Now, you might say that this kind of type validation is already built in into JavaScript and that I should use that instead. And you'd be right, except I like to keep things simple and readable. I find all those validation checks really ugly and confusing, so I like to build a validation utility file in my projects and keep all that logic hidden away.

In fact I recommend you doing the same. You can install this package, import it into that file, and build more complex validation logic there. You can then re-export the methods from this package along with your own, and import that file all over your project, where you need validation.

Also, this is **_NOT_** a form validation package! In fact this is also a reason I created this package. Most validation packages out there are form validators, not type validators.
