import Person from './classtests/Person';
import Punk from './classtests/Punk';

import {isIE, browser} from './helpers';
import {Config, Events} from './models';


import testButton from './views/testButton';


// import {director} from './director/lib/director';
// var director = require('director/lib/director');
var director = require('director/build/director');



// You can import portions from react using syntax import React, { Component } from 'react';.
// import {zip} from 'lodash';


window.trace = function(str){
	console.log(str);
};


// var a = 11;
// var b = 22;
// trace(zip(['1', '2'], ['a', 'b']));

/*

trace(' test ' );
var billy = new Punk("billy");
trace( billy.name );
billy.whoAmI();
trace( browser() );
trace( Events );

*/



// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


trace( Config.bkptSml );

var btn = new testButton({
	el: document.querySelector('.button'),
	copy : "click me"
});



trace( director );




class App {
	constructor() {
		trace(' APP is inited');
		// get this going.

		// var router = new Router();
		var routes = {
			'/posts': this.switchPage.bind(this),
			'/other': [this.switchPage.bind(this), function() {
				trace("An inline route handler.");
			}],
			'/books/view/:bookId': this.switchPage.bind(this)
		};

		// determine how we do the routing
		var browser_history_support = (window.history != null ? window.history.pushState : null) != null;

		var router = new director.Router(routes);

		router.configure({
			html5history: true
		});

		// 
		// window.
		router.init();
	}


	switchPage(e) {
		trace(' ---- App switch page ');
		trace( e );
	}
}


window[Config.appNameSpace + 'App'] = new App();


