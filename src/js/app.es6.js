import Person from './classtests/Person';
import Punk from './classtests/Punk';

import {isIE, browser} from './helpers';
import {Config, Events} from './models';

import testButton from './views/testButton';


// You can import portions from react using syntax import React, { Component } from 'react';.
import {zip} from 'lodash';


window.trace = function(str){
	console.log(str);
};


var a = 11;
var b = 22;

// trace(zip(['1', '2'], ['a', 'b']));

trace(' test ' );

var billy = new Punk("billy");

trace( billy.name );

billy.whoAmI();

trace( browser() );

trace( Events );




// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

trace( Config.bkptSml );


var btn = new testButton({
	el: document.querySelector('.button'),
	copy : "click me"
});


