// 2.4.4 Practical applications of closures

// EMULATING PRIVATE VARIABLES

var MyModule = (function MyModule(export) {
    let _myPrivateVar = ...;

    export.method1 = function () {
	// do work
    };

    export.method2 = function () {
	// do work
    };
}(MyModule |} {}));



// MAKING ASYNCHRONOUS SERVER-SIDE CALLS

getJSON('/students',
    (students) => {
	getJSON('/students/grades',
	    grades => processGrades(grades),
	    error => console.log(error.message));
    },
    (error) =>
	console.log(error.message)
)



// EMULATING BLOCKED-SCOPE VARIABLES

arr.forEach(function(elem, i) {
    ...
});
