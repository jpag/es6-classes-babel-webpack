/*
 * Manages basic binding and rendering
 * 
 */
import {Events, Config} from '../models';


class BaseView {

	/*
	 * accessible variables
	
	_data,
	el,
	events,

	*/

	constructor(obj) {
		
		this._data = obj;
		
		if( obj.el ){
			// if the view is already rendered just assign the element:
			this.el = obj.el;
		}else{
			this.render();
		}

		this.defineEvents();
		this.bindEvents();
		this.draw();

		// then show/reveal ?

	}


	render() {
		trace(' BaseView - render function');

		var rendered = document.createElement('div');
		// do we need to load a model of data before rendering:
		
		// render what library are we using to render templates:

		this.el = rendered;

		// append it?

	}

	defineEvents() {
		
		this.events = [];

		/*this.events = [
			{
				el : document.querySelector reference element or can take a string value.,
				ev : javascript event like "click",
				fn : a binded function to this: this.mouseClick.bind(this)
			}
		];*/
	}

	bindEvents() {
		trace(' BaseView - bind events');
		// bind all events
		for( var e = 0; e < this.events.length; e++){
			
			var obj = this.events[e];

			// trace( typeof obj.el );

			if( typeof obj.el === 'string' ){
				var els = this.el.querySelectorAll(obj.el);
				
				// trace( els );

				if( els.length == 0 ){
					trace(' warning no elements found with querySelector: ' + obj.el );
					// step over and go to next.
					continue;
				}

				for( var el = 0; el < els.length; el++){
					els[el].addEventListener( obj.ev, obj.fn );
				}

			}else if( obj.el instanceof HTMLElement ){
				// assume it is a reference to an instance.
				obj.el.addEventListener( obj.ev, obj.fn );
			}
		}
	}

	draw() {
		// on window resize/update
		trace(' BaseView - draw');
		
	}

	destroy() {
		trace(' - destroy this. ');
		// unassign and unbind all events/variables
		this.unbindAll();

		// remove from DOM ?
	}

	unbindAll() {
		for( var e = 0; e < this.events.length; e++){
			var obj = this.events[e];
			if( typeof obj.el === 'string' ){
				var els = this.el.querySelectorAll(obj.el);
				
				if( els.length == 0 ){
					trace(' warning no elements found with querySelector: ' + obj.el );
					// step over and go to next.
					continue;
				}

				for( var el = 0; el < els.length; el++){
					els[el].removeEventListener( obj.ev, obj.fn );
				}

			}else if( obj.el instanceof HTMLElement ){
				obj.el.removeEventListener( obj.ev, obj.fn );
			}
		}

		this.events = [];
	}
}

module.exports = BaseView;