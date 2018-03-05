// 5.3.2 Error handling with Maybe and Either monads

// findStudent :: String -> Maybe(Student)
function findStudent(ssn)



// safeFindObject :: DB -> String -> Maybe
const safeFindObject = R.curry(function(db, id) {
    return Maybe.fromNullable(find(db, id));
});

// safeFindStudent :: String -> Maybe(Student)
const safeFindStudent = safeFindObject(DB('student'));

const address = safeFindStudent('444-44-4444').map(R.prop('address'));
address; //-> Just(Address(...)) or Nothing



const userName = findStudent('444-44-4444').map(R.prop('firstname'));

document.querySelector('#student-firstname').value =
    username.getOrElse('Enter first name');



function getCountry(student) {
    let school = student.school();
    if(school !== null) {
	let addr = school.address();
	if(addr !== null) {
	    return addr.country();
	}
    }
    return 'Country does not exist!';
}



const country = R.compose(getCountry, safeFindStudent);



const getCountry = (student) => student
      .map(R.prop('school'))
      .map(R.prop('address'))
      .map(R.prop('country'))
      .getOrElse('Country does not exist!');



// Function lifting

const safeFindObject = R.curry(function(db, id) {
    return Maybe.fromNullable(find(db, id));
});



const lift = R.curry(function (f, value) {
    return Maybe.fromNullable(value).map(f);
});

const findObject = R.curry(function(db, id) {
    return find(db, id);
});

const safeFindObject = R.compose(lift, findObject);
safeFindObject(DB('student'), '444-44-4444');



// Recovering from failure with Either

const safeFindObject = R.curry(function (db, id) {
    const obj = find(db, id);
    if(obj) {
	return Either.of(obj);
    }
    return Either.Left(`Object not found with ID: ${id}`);
});



const errorLogger = _.partial(logger, 'console', 'basic', 'MyErrorLogger', 'ERROR');
findStudent('444-44-4444').orElse(errorLogger);



function decode(url) {
    try {
	const result = decodeURIComponent(url);
	return Either.of(result);
    }
    catch (uriError) {
	return Either.Left(uriError);
    }
}



const parse = (url) => url.parseUrl();
decode('%').map(parse); //-> Left(Error('URI malformed'))
decode('http%3A%2F%2Fexample.com').map(parse);
//-> Right(true)
