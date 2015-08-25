// import {Events} from '../models';

var Events = require('../models/events');

class Person {

	constructor(name) {
		this._name = name;

		this.bindEvents();
	}

	bindEvents() {
		trace(' bind events');
		trace( Events );
	}
}

// export default Person;
module.exports = Person;