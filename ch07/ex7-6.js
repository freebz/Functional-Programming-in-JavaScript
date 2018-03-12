// 7.3 Implementing a call-when-needed strategy

function cachedFn (cache, fn, args) {
    let key = fn.name + JSON.stringify(args);
    if(contains(cache, key)) {
	return get(cache, key);
    }
    else {
	let result = fn.apply(this, args);
	put(cache, key, result);
	return result;
    }
}



var cache = {};
cachedFn(cache, findStudent, '444-44-4444');
cachedFn(cache, findStudent, '444-44-4444');
