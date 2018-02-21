// 4.5.4 Coping with pure and impure code

const showStudent = compose(append, csv, findStudent);



R.pipe(
    trim,
    normalize,
    findStudent,
    csv,
    append('#student-info'));
