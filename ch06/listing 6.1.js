// Listing 6.1  Testing the computeAverageGrade program

const fork = function(join, func1, func2){
    return function(val) {
	return join(func1(val), func2(val));
    };
};

const toLetterGrade = function (grade) {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
};

const computeAverageGrade =
      R.compose(toLetterGrade, fork (R.divide, R.sum, R.length));

QUnit.test('Compute Average Grade', function(assert) {

    assert.equal(computeAverageGrade([80, 90, 100]), 'A');
});
