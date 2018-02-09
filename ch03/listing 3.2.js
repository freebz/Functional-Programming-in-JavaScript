// Listing 3.2  Implementing reduce

function reduce(arr, fn, [accumulator]) {
    let idx = -1,
	len = arr.length;

    if (!accumulator && len > 0) {
	accumulator = arr[++idx];
    }

    while (++idx < len) {
	accumulator = fn(accumulator, arr[idx], idx, arr);
    }
    return accumulator;
}
