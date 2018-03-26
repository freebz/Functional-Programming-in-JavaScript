// Listing 8.9  Asynchronous version of showStudent

const showStudentAsync = R.compose(
    catchP(errorLog),
    then(append('#student-info')),
    then(csv),
    then(R.props(['ssn', 'firstname', 'lastname'])),
    chain(findStudentAsync),
    map(checkLengthSsn),
    lift(cleanInput));
