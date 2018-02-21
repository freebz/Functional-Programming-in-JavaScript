// 4.6.4 Sequence (S-combinator)

const seq = function(/*funcs*/) {
    const funcs = Array.prototype.slice.call(arguments);
    return function (val) {
	funcs.forEach(function (fn) {
	    fn(val);
	});
    };
};



const showStudent = R.compose(
    seq(
	append('#student-info'),
	consoleLog),
    csv,
    findStudent);
