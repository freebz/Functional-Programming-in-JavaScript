// Listing 8.4  Refactoring student retrieval using continuation-passing style

var _selector = document.querySelector;

_selector('#search-button').addEventListener('click', handleMouseMovement);

var processGrades = function (grades) {
    // ... process list of grades for this student...
};

var handleMouseMovement = () =>
    getJSON(`/students/${info.ssn}/grades`, processGrades);

var showStudent = function (info) {
    _selector('#student-info').innerHTML = info;
    _selector('#student-info').addEventListener(
	'mouseover', handleMouseMovement);
};

var handleError = error =>
    console.log('Error occurred' + error.message);

var handleClickEvent = function (event) {
    event.preventDefault();

    let ssn = _selector('#student-ssn').value;
    if(!ssn) {
	alert('Valid SSN needed!');
	return;
    }
    else {
	getJSON(`/students/${ssn}`, showStudent).fail(handleError);
    }
};
