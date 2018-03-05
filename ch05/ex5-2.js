// 5.1.2 Reasons not to throw exceptions in functional programs

try {
    var student = findStudent('444-44-4444');

    ... more lines of code in between
}
catch (e) {
    console.log('ERROR: not found');

    // Handle error here
}



var student = null;
try {
    student = findStudent('444-44-4444');
}
catch (e) {
    console.log('ERROR: Cannot locate students by SSN');

    try {
	student = findStudentByAddress(new Address(...));
    }
    catch (e) {
	console.log('ERROR: Student is no where to be found!');
    }
}
