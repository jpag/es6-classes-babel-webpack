function trace(str) {
	console.log(str);
}

trace(' - booting up node server - ');

var localconfig = require('./server.localconfig'),
	env = localconfig.env,
	config = {};


trace(" - loop to find argument for env. -");
// Loop through arguments and see if environment is declared if so assign it.
process.argv.forEach(function (val, index, array) {
	var split = val.split('=');
	if( split[0] == 'env' && split.length > 1 ){
 		env = split[1];
 	}
});
// we have an environment so define the config object accordingly.
config = require('./server.config')[env];
trace( ' ' + config.app.name );


// --------
// Instantiate the server
// --------
var port = config.port || 3000;
var express = require('express')
var serveStatic = require('serve-static') 
var app = express()

	app.use(serveStatic(config.staticPath))
	app.listen(port)

trace(' static server path : ' + config.staticPath );
trace(' started on port: ' + port);
trace(' environment: ' + env);
trace('\n\n-------\n-------\n'+ 'localhost:' + port+'\n-------\n-------\n\n');

