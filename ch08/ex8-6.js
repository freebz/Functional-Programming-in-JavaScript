// 8.2.2 Composing synchronous and asynchronous behavior

// fetchStudentDBAsync :: DB -> String -> Promise(Student)
const fetchStudentDBAsync = R.curry(function (db, ssn) {
    return find(db, ssn);
});

// findStudentAsync :: String -> Promise
const findStudentAsync = fetchStudentDBAsync(db);

// then :: f -> Thenable -> Thenable
const then = R.curry(function (f, thenable) {
    return thenable.then(f);
});

// catchP :: f -> Promise -> Promise
const catchP = R.curry(function (f, promise) {
    return promise.catch(f);
});

// errorLog :: Error -> void
const errorLog = _.partial(logger, 'console', 'basic',
			   'ShowStudentAsync', 'ERROR');
