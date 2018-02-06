// 2.4 Closures and scopes

function zipCode(code, location) {
    let _code = code;
    let _location = location || '';

    return {
	code: function () {
	    return _code;
	},
	location: function () {
	    return _location;
	},
	//...
    };
}



const princetonZip = zipCode('08544', '3345');
princetonZip.code(); //-> '08544'



function makeAddFunction(amount) {
    function add(number) {
	return number + amount;
    }
    return add;
}

function makeExponentialFunction(base) {
    function raise (exponent) {
	return Math.pow(base, exponent);
    }
    return raise;
}
var addTenTo = makeAddFunction(10);
addTenTo(10); //-> 20

var raiseThreeTo = makeExponentialFunction(3);
raiseThreeTo(2); //-> 9
