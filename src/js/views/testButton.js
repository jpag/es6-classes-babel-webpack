/*
 * Test instance. 
 * looks at event binding within this.
 * extending off a view. etc.
 * 
 */

import BaseView from './baseView';
import {Classes} from '../models';


class testButton extends BaseView {

	constructor(obj) {
		super(obj);
	}

	defineEvents() {
		
		// define events, after render and/or this.el is defined.
		this.events = [
			{
				el : this.el,
				ev : "click",
				fn : this.mouseClick.bind(this)
			},{
				el : ".nob",
				ev : "mouseover",
				fn : this.overOutNobs.bind(this)
			},{
				el : ".nob",
				ev : "mouseout",
				fn : this.overOutNobs.bind(this)
			}
		];

	}

	mouseClick(e) {
		trace(' mouse click');
		trace( this._data );

		this.doFurtherAction();
	}

	overOutNobs(e) {
		var el = e.currentTarget;
		
		if( e.type == 'mouseover' ){
			e.currentTarget.classList.add(Classes.a);	
		}else{
			e.currentTarget.classList.remove(Classes.a);	
		}
	}

	// test binding of this.doFurther from click.
	doFurtherAction() {
		trace(' do further action');
		this.destroy();
	}

}


module.exports = testButton;