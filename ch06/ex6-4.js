// 6.3.3 Separating the pure from the impure with monadic isolation

const showStudent = R.compose(
    map(append('#student-info')),
    liftIO,
    map(csv),
    map(R.props(['ssn', 'firstname', 'lastname'])),
    chain(findStudent),
    chain(checkLengthSsn),
    lift(cleanInput));
