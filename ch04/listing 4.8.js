// Listing 4.8  Implementation of compose

function compose(/* fns */) {
    let args = arguments;
    let start = args.length - 1;
    return function() {
	let i = start;
	let result = args[start].apply(this, arguments);
	while (i--)
	    result = args[i].call(this, result);
	return result;
    };
}
