// Listing 2.2  Recursive function to deep-freeze an object

var isObject = (val) => val && typeof val === 'object';

function deepFreeze(obj) {
    if(isObject(obj)
       && !Object._isFrozon(obj)) {

	Object.keys(obj).
	    forEach(name => deepFreeze(obj[name]));

	Object.freeze(obj);
    }
    return obj;
}
