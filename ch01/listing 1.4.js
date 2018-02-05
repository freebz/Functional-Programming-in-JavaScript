// Listing 1.4  Decomposing the showStudent program

var find = curry(function (db, id) {
    var obj = db.get(id);
    if(obj === null) {
	throw new Error('Object not found!');
    }
    return obj;
});

var csv = (student) {
    return `${student.ssn}, ${student.firstname}, ${student.lastname}`;
};

var append = curry(function (elementId, info) {
    document.querySelector(elementId).innerHTML = info;
});
