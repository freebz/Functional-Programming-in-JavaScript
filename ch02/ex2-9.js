// 2.3.4 Function methods

function negate(func) {
    return function() {
	return !func.apply(null, arguments);
    };
}

function isNull(val) {
    return val === null;
}

var isNotNull = negate(isNull);

isNotNull(null); //-> false
isNotNull({});   //-> true
