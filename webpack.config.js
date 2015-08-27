var path = require('path');
var webpack = require('webpack');





var includePath = 'src/js/';
var outputPath = __dirname + '/public/js/';
var devTool = 'source-map';



var PROD = JSON.parse(process.env.ENV_PROD || 0);

var plugins = [
    // Avoid publishing files when compilation failed
    new webpack.NoErrorsPlugin(),

    // include plugins for module use.
    new webpack.ProvidePlugin({
       /* i.e.
       $: "jquery",
       jQuery: "jquery"
       */
    })
];

// TODO also deploy this to a different output path.
if( PROD ){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({minimize: true}) 
    );
    outputPath = __dirname + '/dist/js/';
    devTool = 'hidden-source-map';

    console.log('---- WEBPACK ----\n running in production');
}else{
    console.log('---- WEBPACK ----\n running in development');
}



console.log(' running webpack in ' + __dirname );
console.log(' include path ' + includePath );
console.log(' outputPath path ' + outputPath );


module.exports = {

    /*
    http://webpack.github.io/docs/configuration.html

    ENTRY 
    If you pass a string: The string is resolved to a module which is loaded upon startup.
    If you pass an array: All modules are loaded upon startup. The last one is exported.
    If you pass an object: Multiple entry bundles are created. The key is the chunk name. The value can be a string or an array.
    */
    
    entry: './src/js/app.es6.js',
    
    output: {
        path: outputPath,
        filename: 'app.js'
    },

    module: {
        loaders: [

            {
                test: /\.js$/,
                // test: path.join(__dirname, 'src/js'),
                // loader: ['babel-loader'],
                // loader: 'babel-loader',
                loader: 'babel-loader?optional=runtime',
                

                // run babel ONLY in our source code.
                // include: includePath,

                // exclude: /node_modules/,
                // loader: 'babel'

            }
        ]

    },


    /*
    // We add webpack/hot/dev-server to our main entry point
    entry: {
        app: ['webpack/hot/dev-server', './app/main.js'],
        Home: ['./app/Home.js'],
        Admin: ['./app/Admin.js']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },*/




    plugins: plugins,

    stats: {
        // Nice colored output
        colors: true
    },
    
    // Create Sourcemaps for the bundle
    devtool: devTool

};