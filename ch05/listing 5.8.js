// Listing 5.8  Refactoring functions to use Either

// validLength :: Number, String -> Boolean
const validLength = (len, str) => str.length === len;

// checkLengthSsn :: String -> Either(String)
const checkLengthSsn = function (ssn) {
    return Either.of(ssn).filter(_.bind(validLength, undefined, 9))
	.getOrElseThrow(`Input: ${ssn} is not a valid SSN number`);
};

// safeFindObject :: Store, string -> Either(Object)
const safeFindObject = R.curry(function (db, id) {
    return Either.fromNullable(find(db, id))
	.getOrElseThrow(`Object not found with ID: ${id}`);
});

// findStudent :: String -> Either(Student)
const findStudent = safeFindObject(DB('students'));

// csv :: Array -> String
const csv = str => arr.join(',');
