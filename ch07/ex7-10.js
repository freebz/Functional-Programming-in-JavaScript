// 7.3.5 Applying memoization to recursive calls

const factorial = ((n) => (n === 0) ? 1
		   : (n * factorial(n - 1))).memoize();

factorial(100); //-> Takes .299 ms
factorial(101); //-> Second time, takes .021 ms
