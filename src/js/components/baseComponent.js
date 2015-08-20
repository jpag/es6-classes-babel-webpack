/*
 * A component is a 'page' within your app. It holds many different views 
 * and displays a specific state. Your account profile section would be one component
 * and a directory listing would be another.
 *
*/

import BaseView from '../views/baseView';
import {Events, Config} from '../models';


class BaseComponent extends BaseView {

	/*
	 * accessible variables
	
	_data,
	el,
	events,
	children

	*/

	constructor(obj) {
		// we won't use super here:
		// super();
		this.children = [];
		this._data = obj;
		this.bindEvents();
	}

	// construct children once this is complete.
	constructChildren() {
		
		// this.children.push();
	}

	// a throttled scroll event to dispatch to all children
	// a throttled resize event to dispatch to all children
	bindEvents() {

	}

	destroy() {
		// destroy unbind all children.
		for( var c = 0; c < this.children.length; c++){
			this.children[c].destroy();
		}
	}

	draw() {

	}


}

module.exports = BaseComponent;