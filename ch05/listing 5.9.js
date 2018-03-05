// Listing 5.9  showStudent using monads for automatic error handling

const showStudent = (ssn) =>
      Maybe.fromNullable(ssn)
      .map  (cleanInput)
      .chain(checkLengthSsn)
      .chain(findStudent)
      .map  (R.props(['ssn', 'firstname', 'lastname']))
      .map  (csv)
      .map  (append('#student-info'));
