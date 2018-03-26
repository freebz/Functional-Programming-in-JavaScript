// Listing 8.7  Fetching multiple items at once with Promise.all()

const average = R.compose(Math.ceil,
			  forkJoin(R.divide, R.sum, R.length));
getJSON('/students')
    .then(hide('spinner'));
    .then(R.map(student => '/grades?ssn=' + student.ssn))
    .then(gradeUrls =>
	  Promise.all(R.map(getJSON, gradeUrls)))
    .then(R.map(avegate))
    .then(average)
    .then(grade => IO.of(grade).map(console.log).run())
    .catch(error => console.log('Error ocurred: ' + error.message));
