/*
 * Store consts/variables
 * 
 *
 */

import {browser} from '../helpers';

var scrollBarWidth = 0;
if( browser()[0] == 'safari' &&
	!('ontouchstart' in window)
){ 
	// only for safari desktop.
	scrollBarWidth = 15;
}


module.exports = {

	appNameSpace : 'app',

	// breakpoints :
	bkptMax   	: 1600, //980,
	bkptMed   	: 992 + scrollBarWidth,  //767,
	bkptSml   	: 767 + scrollBarWidth,   //480

	resizeThrottle : 25,
	scrollThrottle	: 50,

	minWidth 	: 300,
	maxWidth 	: 1200,


};