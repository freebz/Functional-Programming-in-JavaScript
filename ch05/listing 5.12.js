// Listing 5.12  Complete showStudent program

const showStudent = R.compose(
    map(append('#student-info')),
    liftIO,
    map(csv),
    map(R.props(['ssn', 'firstname', 'lastname'])),
    chain(findStudent),
    chain(checkLengthSsn),
    lift(cleanInput));
