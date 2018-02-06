// 2.2.2 Treating objects as values

const gravity_ms = 9.806;

gravity_ms = 20;



const student = new Student('Alonzo', 'Church',
			    '666-66-6666', 'Princeton');

student.lastname = 'Mourning';



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
	fromString: function (str) {
	    let parts = str.split('-');
	    return zipCode(parts[0], parts[1]);
	},
	toString: function () {
	    return _code + '-' + _location;
	}
    };
}

const princetonZip = zipCode('08544', '3345');
princetonZip.toString(); //-> '08544-3345'



function coordinate(lat, long) {
    let _lat = lat;
    let _long = long;

    return {
	latitude: function () {
	    return _lat;
	},
	longitude: function () {
	    return _long;
	},
	translate: function (dx, dy) {
	    return coordinate(_lat + dx, _long + dy);
	},
	toString: function () {
	    return '(' + _lat + ',' + _long + ')';
	}
    };
}

const greenwith = coordinate(51.4778, 0.0015);
greenwith.toString(); //-> '(51.4778, 0.0015)'



greenwith.translate(10, 10).toString(); //-> '(61.4778, 10.0015)'
