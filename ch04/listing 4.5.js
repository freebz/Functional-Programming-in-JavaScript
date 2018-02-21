// Listing 4.5  Manual currying with two arguments

function curry2(fn) {
    return function(firstArg) {
	return function(secondArg) {
	    return fn(firstArg, secondArg);
	};
    };
}
