import Person from './Person';

class Punk extends Person {

	constructor(name) {
		trace(' construct a punk');
		super(name);
	}

	bindEvents() {
		trace(' bind punk events');
		super.bindEvents();
	}

	get name(){
		return this._name;
	}

	set name(str){
		this._name = str
	}

	whoAmI() {
		trace(' I am a punk ' + this._name)
	}
}

module.exports = Punk;

