// Listing 3.1  Map implementation

function map(arr, fn) {
    let idx    = -1,
	len    = arr.length,
	result = new Array(len);

    while (++idx < len) {
	result[idx] = fn(array[idx], idx, arr);
    }
    return result;
}
