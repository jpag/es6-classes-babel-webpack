/*
 * Test instance. 
 * looks at event binding within this.
 * extending off a view. etc.
 * 
 */

import BaseView from './baseView';
import {Classes, Events} from '../models';
import {dispatchEvent} from '../helpers';


// could use let : local
let letForTestButton = "this variable is accessible";
const constTestButton = "this value is a const";
var variableForTestButton = 0.1;


class testButton extends BaseView {

	constructor(obj) {
		super(obj);

		trace( variableForTestButton );
		trace( letForTestButton );
		variableForTestButton++;

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
		// trace( this._data );

		trace( variableForTestButton );
		trace( letForTestButton );
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

		// pulls an error on compile.
		/*
		try {
			constTestButton = "try to change the let variable";
		}finally{
			trace(' error, we cantchange a LET');
		}
		*/

		trace( constTestButton );

		this.destroy();

		dispatchEvent(Events.app.stateChange, {somevar:"pass some datas"});

	}

}


module.exports = testButton;