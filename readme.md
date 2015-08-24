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
    -Event Dispatching
    -Main app / entry point
    -Component test instance/example
    -AMD style loading/ selective library loading of content.
    -Unit testing (tape/tap)
    -Hot loading (react hot loading is sweet?)

## Development Stack

### Server
    loose node server to deliver static content.

### Cient
    compiled files from watched webpack/babel.
    stylus files are compiled on watch as well.

All package management and tasks are run through NPM. 
- [Stylus](learnboost.github.com/stylus/) with autoprefixer
- [router.js](https://github.com/tildeio/router.js/) for managing all routing. It is also the routing microlib used by ember.js



### notes on using webpack babel

#### specify parts of a library instead of the whole kitchen sink

#### Reduce transpiled code helpers with babel and webpack: avoiding duplication/bloat

https://babeljs.io/docs/usage/runtime/
Babel uses very small helpers for common functions such as _extend. By default this will be added to every file that requires it. This duplication is sometimes unnecessary, especially when your application is spread out over multiple files.

babel-runtime must be installed to make this work, and help avoid bloat

This is where the runtime optional transformer comes in. All of the helpers will reference the module babel-runtime to avoid duplication across your compiled output.

## Browser capabilities
Highlight places polyfills and shims will be needed:

### not supported by IE8 and below
    removeEventListener() 
    bind() 



### Rules to follow

- components should be written in ES6
- components should be completely self sufficient (usage should be as simple as “install, import, render”)
- components should provide their own styles (because of 2)
— all components should have tests and code coverage reports.
— components should not depend on each other, but should be able to interact


### links/refs

Writing client-side ES6 with webpack
http://www.2ality.com/2015/04/webpack-es6.html

ECMAScript 6 modules: the final syntax
http://www.2ality.com/2014/09/es6-modules-final.html

Classes in ECMAScript 6 (final semantics)
http://www.2ality.com/2015/02/es6-classes-final.html

ECMAScript 6: automatically binding extracted methods
http://www.2ality.com/2013/06/auto-binding.html

Building modular javascript applications in ES6 with React, Webpack and Babel
https://medium.com/@yamalight/building-modular-javascript-applications-in-es6-with-react-webpack-and-babel-538189cd485f

Inheritance and the prototype chain (classes/extend)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

Import ES6
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

Building Apps with Riot, ES6 and Webpack
http://blog.srackham.com/posts/riot-es6-webpack-apps/

Using webpack with shims and polyfills
http://mts.io/2015/04/08/webpack-shims-polyfills/

#### Routers
https://github.com/EngineeringMode/Grapnel.js

https://github.com/visionmedia/page.js
for support under ie10 will need a polyfill

https://github.com/chrisdavies/rlite

https://github.com/flatiron/director
can use hash and push state.

https://github.com/tildeio/router.js/
does not manage/watch url changes, but is the microlib for emberjs routing.
for support uner ie10 will need a polyfill
