// 7.4.1 Converting non-tail calls to tail calls

const factorial = (n) =>
      (n === 1) ? 1
      : (n * factorial(n - 1));



function sum(arr) {
    if(_.isEmpty(arr)) {
	return 0;
    }
    return _.first(arr) + sum(_.rest(arr));
}



function sum(arr, acc = 0) {
    if(_.isEmpty(arr)) {
	return 0;
    }
    return sum(_.rest(arr), acc + _.first(arr));
}
