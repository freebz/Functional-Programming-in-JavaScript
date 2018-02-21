// 4.6.5 Fork (join) combinator

const fork = function(join, func1, func2){
    return function(val) {
	return join(func1(val), func2(val));
    };
};



const computeAverageGrade =
      R.compose(getLetterGrade, fork(R.divide, R.sum, R.length));

computeAverageGrade([99, 80, 89]); //-> 'B'



const eqMedianAverage = fork(R.equals, R.median, R.mean);
eqMedianAverage([80, 90, 100]);  //-> True
eqMedianAverage([81, 90, 100]);  //-> False
