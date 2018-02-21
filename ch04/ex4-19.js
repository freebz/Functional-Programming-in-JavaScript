// 4.6.3 Alternation (OR-combinator)

const alt = function (func1, func2) {
    return function (val) {
	return func1(val) || func2(val);
    }
};



const alt = R.curry((func1, func2, val) => func1(val) || func2(val));



const showStudent = R.compose(
    append('#student-info'),
    csv,
    alt(findStudent, createNewStudent));

showStudent('444-44-4444');



var student = findStudent('444-44-4444');
if(student !== null) {
    let info = csv(student);
    append('#student-info', info);
}
else {
    let newStudent = createNewStudent('444-44-4444');
    let info = csv(newStudent);
    append('#student-info', info);
}
