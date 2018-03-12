// 7.3.4 Decomposing to maximize memoization

const m_cleanInput = cleanInput.memoize();
const m_checkLengthSsn = checkLengthSsn.memoize();
const m_findStudent = findStudent.memoize();

const showStudent = R.compose(
    map(append('#student-info')),
    liftIO,
    chain(csv),
    map(R.prop(['ssn', 'firstname', 'lastname'])),
    map(m_findStudent),
    map(m_checkLengthSsn),
    lift(m_cleanInput));

showStudent('444-44-4444').run(); //-> 9.2 ms on average (no memoization)

showStudent('444-44-4444').run(); //-> 2.5 ms on average (with memoization)
