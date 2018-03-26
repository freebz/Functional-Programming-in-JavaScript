// Listing 8.6  Fetching student and grade data with asynchronous calls

getJSON('/students')
    .then(hide('spinner'))
    .then(R.filter(s => s.address.country == 'US'))
    .then(R.sortBy(R.prop('ssn')))
    .then(R.map(student => {
	return getJSON('/grades?ssn=' + student.ssn)
	    .then(R.compose(Math.ceil,
			    forkJoin(R.divide, R.sum, R.length)))
	    .then(grade =>
		  IO.of(R.merge(student,
				{'grade': grade}))
		  .map(R.props(['ssn', 'firstname', 'lastname', 'grade']))
		  .map(csv)
		  .map(append('#student-info')).run()
	    );
    }))
    .catch(function(error) {
	console.log('Error occurred: ' + error.message);
    });
