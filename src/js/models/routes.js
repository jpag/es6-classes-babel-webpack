/*
 *
 * export paths and event names -
 * on a history change 
 * the proper classes can listen for the event name dispatched
 */

// import {Events} from '../models';
// import {Events} from './models';
var Events = require('../models/events');

module.exports = [
	{
		path: "/",
		evt : Events.history.index

	},{
		path: "/posts",
		evt : Events.history.posts

	},{
		path: "/other",
		evt : Events.history.other		
	}
];