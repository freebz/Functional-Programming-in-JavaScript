// 8.1.3 Using continuation-passing style

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.address.country === 'US') {
	getJSON(`/students/${student.ssn}/grades`,
	    function (grades) {
		showStudents(student, average(grades));
	    },
	    function (error) {
		console.log(error.message);
	    }
	);
    }
}



const showStudentsGrades = R.curry(function (student, grades) {
    appendData(student, average(grades));
});

const handleError = error => console.log(error.message);

const processStudent = function (student) {
    if (student.address.country === 'US') {
	getJSON(`/students/${student.ssn}/grades`,
	    showStudentsGrades(student), handleError);
    }
};

for (let i = 0; i < students.length; i++) {
    processStudent(students[i]);
}
