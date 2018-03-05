// 5.4 MOnadic chains and compositions

const debugLog = _.partial(logger, 'console', 'basic',
			   'Monad Example', 'TRACE');

const errorLog = _.partial(logger, 'console', 'basic',
			   'Monad Example', 'ERROR');

const trace = R.curry((msg, val) => debugLog(msg + ':' + val));



showStudent('444-44-4444').orElse(errorLog);



function showStudent(ssn) {
    if(ssn != null) {
	ssn = ssn.replace(/^\s*|\-|\s*$/g, '');
	if(ssn.length !== 9) {
	    throw new Error('Invalid Input');
	}

	let student = db.get(ssn);
	if (student) {
	    document.querySelector(`#${elementId}`).innerHTML =
		`${student.ssn},
	         ${student.firstname},
	         ${student.lastname}`;
	}
	else {
	    throw new Error('Student not found!');
	}
    }
    else {
	throw new Error('Invalid SSN!');
    }
}
