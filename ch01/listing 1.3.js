// Listing 1.3  Imperative showStudent function with side effects

function showStudent(ssn) {
    var student = db.get(ssn);
    if(student !== null) {
	document.querySelector(`#${elementId}`).innerHTML =
	    `${student.ssn},
	     ${student.firstname},
	     ${student.lastname}`;
    }
    else {
	throw new Error('Student not found!');
    }
}

showStudent('444-44-4444');
