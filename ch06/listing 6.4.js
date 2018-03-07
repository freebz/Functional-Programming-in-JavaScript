// Listing 6.4  Property-based test for computeAverageGrade

JSC.clear();
JSC.on_report((str) => console.log(str));

JSC.test(
    'Compute Average Grade',
    function (verdict, grades, grade) {
	return verdict(computeAverageGrade(grades) === grade);
    },
    [
	JSC.array(JSC.integer(20), JSC.number(90,100)),
	'A'
    ],
    function (grades, grade) {
	return 'Testing for an ' + grade + ' on grades: ' + grades;
    }
);
