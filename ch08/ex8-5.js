// 8.2.1 Future method chains

getJSON('/students').then(
    function(students) {
	console.log(R.map(student => student.name, students));
    },
    function (error) {
	console.log(error.message);
    }
};



getJSON('/students',
    function (students) {
	students.sort(function(a, b){
	    if(a.ssn < b.ssn) return -1;
	    if(a.ssn > b.ssn) return 1;
	    return 0;
	});
	for (let i = 0; i < students.length; i++) {
	    let student = students[i];
	    if (student.address.country === 'US') {
		getJSON(`/students/${student.ssn}/grades`,
		    function (grades) {
			showStudents(student, average(grades));
		    },
		    function (error) {
			console.log(error.message);
		    });
	    }
	}
    },
    function (error) {
	console.log(error.message);
    }
);
