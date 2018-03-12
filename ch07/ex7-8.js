// 7.3.3 Taking advantage of currying and memoization

const safeFindObject = R.curry(function (db, ssn) {
    // expensive IO lookup operation
});

const findStudent = safeFindObject(DB('students')).meoize();
findStudent('444-44-4444');
