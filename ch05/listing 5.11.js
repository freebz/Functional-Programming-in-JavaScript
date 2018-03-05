// Listing 5.11  Monads as programmable commas

const showStudent = R.compose(
    R.tap(trace('Student added to HTML page')),
    map(append('#student-info')),
    R.tap(trace('Student info converted to CSV')),
    map(csv),
    map(R.props(['ssn', 'firstname', 'lastname'])),
    R.tap(trace('Record fetched successfully!')),
    chain(findStudent),
    R.tap(findStudent),
    R.tap(trace('Input was valid')),
    chain(checkLengthSsn),
    lift(cleanInput));
