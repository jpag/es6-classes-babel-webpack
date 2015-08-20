var path = require('path');
// root of the project folder.
var rootPath = path.normalize(__dirname + '/');

module.exports = {
  local: {
    root: rootPath,
    port: 8080,
    staticPath : rootPath + '../public/',
    app: {
      name: 'Server (LOCAL)'
    }
  },
  jplocal: {
    root: rootPath,
    port: 8080,
    staticPath : rootPath + '../public/',
    app: {
      name: 'Server (JP LOCAL)'
    }
  },
  production: {
    root: rootPath,
    port : 8080,
    staticPath : rootPath + '/public/',
    app: {
      name: 'Server (PROD)'
    }
  }
}; 