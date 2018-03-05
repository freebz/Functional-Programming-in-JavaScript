// Listing 5.4  Flattening a monadic structure

// findObject :: DB -> String -> Wrapper
const findObject = R.curry(function(db, id) {
    return Wrapper.of(find(db, id));
});

// getAddress :: Student -> Wrapper
const getAddress = function(student) {
    return Wrapper.of(student.map(R.prop('address')));
}

const studentAddress = R.compose(getAddress, findObject(DB('student')));

studentAddress('444-44-4444').join().get(); // Address
