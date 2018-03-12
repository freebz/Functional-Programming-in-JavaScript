// 7.1.2 Chanllenges of recursive code

function increment(i) {
    console.log(i);
    increment(++i);
}
increment(1);



function longest(str, arr) {
    if(R.isEmpty(arr)) {
	return str;
    } else {
	let currentStr = R.head(arr).length >= str.length
	    ? R.head(arr) : str;
	return longest(currentStr, R.tail(arr));
    }
}
