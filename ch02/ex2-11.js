// 2.4.2 JavaScript's function scope

function doWork() {
    let student = new Student(...);
    let address = new Address(...);
    // do more wrok
};



var x = 'Some value';
function parentFunction() {
    function innerFunction() {
	console.log(x);
    }
    return innerFunction;
}
var inner = parentFunction();
inner();
