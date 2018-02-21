// Listing 4.12  Point-free version of a Unix program using Ramda functions

const runProgram = R.pipe(
    R.map(R.toLower),
    R.uniq,
    R.sortBy(R.identity));

runProgram(['Functional', 'Programming', 'Curry',
	    'Memoization', 'Partial', 'Curry', 'Programming']);

//-> [curry, functional, memoization, partial, programming]
