// Listing 3.5  filter implementation

function filter(arr, predicate) {
    let idx = -1,
	len = arr.length,
	result = [];

    while (++idx < len) {
	let value = arr[idx];
	if (predicate(value, idx, this)) {
	    result.push(value);
	}
    }
    return result;
}
