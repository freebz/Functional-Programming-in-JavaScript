// 2.2.3 Deep-freezing moving parts

var person = Object.freeze(new Person('Haskell', 'Curry', '444-44-4444'));
person.firstname = 'Bob';



class Address {
    constructor(country, state, city, zip, street) {
	this._country = country;
	this._state = state;
	this._city = city;
	this._zip = zip;
	this._street = street;
    }

    get street() {
	return this._street;
    }

    get city() {
	return this._city;
    }

    get state() {
	return this._state;
    }

    get zip() {
	return this._zip;
    }

    get country() {
	return this._country;
    }
}



var person = new Person('Haskell', 'Curry', '444-44-4444');
person.address = new Address(
    'US', 'NJ', 'Princeton',
    zipCode('08544','1234'), 'Alexander St.');

person = Object.freeze(person);

person.address._country = 'France'; //-> allowed!
person.address.country; //-> 'France'
