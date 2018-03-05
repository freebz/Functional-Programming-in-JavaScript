// 5.3 Functional error handling using monads

const findStudent = R.curry(function(db, ssn) {
    return wrap(find(db, ssn));
});

const getAddress = function(student) {
    return wrap(student.fmap(R.prop('address')));
}



const studentAddress = R.compose(
    getAddress,
    findStudent(DB('student'))
);



studentAddress('444-44-4444').map(R.identity).map(R.identity);
