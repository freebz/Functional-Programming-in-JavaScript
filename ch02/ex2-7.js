// 2.3.2 Higher-order functions

function applyOperation(a, b, opt) {
    return opt(a,b);
}

var multiplier = (a, b) => a * b;

applyOperation(2, 3, multiplier); // -> 6



function add(a) {
    return function (b) {
	return a + b;
    }
}
add(3)(3); //-> 6



function printPeopleInTheUs(people) {
    for (let i = 0; i < people.length; i++) {
	var thisPerson = people[i];
	if(thisPerson.address.country === 'US') {
	    console.log(thisPerson);
	}
    }
}
printPeopleInTheUs([p1, p2, p3]);



function printPeople(people, action) {
    for (let i = 0; i < people.length; i++) {
	action (people[i]);
    }
}

var action = function (person) {
    if(person.address.country === 'US') {
	console.log(person);
    }
}

printPeople(people.action);



function printPeople(people, selector, printer) {
    people.forEach(function (person) {
	if(selector(person)) {
	    printer(person);
	}
    });
}

var inUs = person => person.address.country === 'US';

printPeople(people, inUs, console.log);
