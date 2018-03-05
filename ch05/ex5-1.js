// 5.1 Shortfalls of imperative error handling

// 5.1.1 Error handling with try-catch

try {
    // code that might throw an exception in here
}
catch (e) {
    // statement to handle any exceptions
    console.log('ERROR' + e.message);
}



// findObject :: DB, String -> Object
const findObject = R.curry(function (db, id) {
    const result = find(db, id)
    if(!result) {
	throw new Error('Object with ID [' + id + '] not found');
    }
    return result;
});

// findStudent :: String -> Student
const findStudent = findObject(DB('students'));



try {
    var student = findStudent('444-44-4444');
}
catch (e) {
    console.log('ERROR' + e.message);
}
