function trace(str) {
	console.log(str);
}

trace(' - booting up node server - ');

var serveStatic = require('serve-static'),
	connect = require('connect'),
	localconfig = require('./server.localconfig'),
	env = localconfig.env;
	
trace(" loop to find argument for env.");
// Loop through arguments and see if environment is declared if so assign it.
process.argv.forEach(function (val, index, array) {
	var split = val.split('=');
	if( split[0] == 'env' && split.length > 1 ){
 		env = split[1];
 	}
});

var config = require('./server.config')[env];

trace( ' ' + config.app.name );


// Instantiate the server
var app = connect(),
	staticApp = connect(),
	// Start the server by listening on <port>
	port = config.port || 3000;


staticApp.use(serveStatic(config.staticPath));

app.use(staticApp);
app.listen(port);

trace(' static server path : ' + config.staticPath );
trace(' started on port: ' + port);
trace(' environment: ' + env);

trace('\n\n-------\n-------\n'+ 'localhost:' + port+'\n-------\n-------\n\n');


/*
	you can now set up a proxy with apache / nginx 
	to display during development a url sans port number
	http://thatextramile.be/blog/2012/01/hosting-a-node-js-site-through-apache
*/