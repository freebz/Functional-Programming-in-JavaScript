// 7.4 Recursion and tail-call optimization (TCO)

const factorial = (n, current - 1) =>
      (n === 1) ? current
      : factorial(n - 1, n * current);



var factorial = function (n) {
    let result = 1;
    for(let x = n; x > 1; x--) {
	result *= x;
    }
    return result;
}
