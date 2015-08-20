# ES6 Classes with Webpack + Babel

## Why
I don't want to work in dependency hell. Right out of the gate this framework is very lean. And does not rely on specific frameworks or other libraries. 
    
    -It is pure ES6, managed by webpack, and transpiled by Babel.
    -NPM is the package and script manager, all in the packages.json file.

## Loose framework to build out ES6 classes using Babel and Webpack

A very incomplete framework. 
- Deployment functions are not complete.
- Basics are working.
- no shims or polyfill checks implemented yet (for legacy browsers).

### TODO:
    -Router
    -Main app / entry point
    -Component test instance/example
    -AMD style loading/ selective library loading of content.
    -Unit testing (tape/tap)

## Development Stack

### Server
    loose node server to deliver static content.

### Cient
    compiled files from watched webpack/babel.
    stylus files are compiled on watch as well.

All package management and tasks are run through NPM. 
Stylus with autoprefixer

### notes on using webpack babel

#### specify parts of a library instead of the whole kitchen sink

#### Reduce transpiled code helpers with babel and webpack: avoiding duplication/bloat

https://babeljs.io/docs/usage/runtime/
Babel uses very small helpers for common functions such as _extend. By default this will be added to every file that requires it. This duplication is sometimes unnecessary, especially when your application is spread out over multiple files.

babel-runtime must be installed to make this work, and help avoid bloat

This is where the runtime optional transformer comes in. All of the helpers will reference the module babel-runtime to avoid duplication across your compiled output.

## Browser capabilities


### not supported by IE8 and below
    removeEventListener() 
    bind() 


### Rules to follow

- components should be written in ES6
- components should be completely self sufficient (usage should be as simple as “install, import, render”)
- components should provide their own styles (because of 2)
— all components should have tests and code coverage reports.
— components should not depend on each other, but should be able to interact


