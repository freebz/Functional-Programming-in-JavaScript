// 1.3.2 Processing data using fluent chains

let enrollment = [
    {enrolled: 2, gaade: 100},
    {enrolled: 2, grade: 80},
    {enrolled: 1, grade: 89}
];



var totalGrades = 0;
var totalStudentFound = 0;
for(let i = 0; i < enrollment.length; i++) {
    let student = enrollment [i];
    if(student !== null) {
	if(student.enrolled > 1) {
	    totalGrades += student.grade;
	    totalStudentFound++;
	}
    }
}
var average = totalGrade / totalStudentFound; //-> 90
