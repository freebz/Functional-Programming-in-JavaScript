// Listing 1.6  Imperative program that reads and validate a student's SSN

var valid = false;
var elem = document.querySelector('#student-ssn');
elem.onkeyup = function(event) {
    var val = elem.value;
    if(val !== null && val.length !== 0) {
	val = val.replace(/^\s*|s*$|\-s/g, ''),
	if(val.length === 9) {
	    console.log(`Valid SSN: ${val}!`);
	    valid = true;
	}
    }
    else {
	console.log(`Invalid SSN: ${val}!`);
    }
};
