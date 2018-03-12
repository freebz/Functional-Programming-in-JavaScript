// 7.2.1 Avoding computations with the alternation functional combinator

const alt = R.curry((func1, func2, val) => func1(val) || func2(val));

const showStudent = R.compose(append('#student-info'),
			      alt(findStudent, createNewStudent));

showStudent('444-44-4444');



var student = findStudent('444-44-4444');
if(student !== null) {
    append('#student-info', student);
}
else {
    append('#student-info', createNewStudent('444-44-4444'));
}
