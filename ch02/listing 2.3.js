// Listing 2.3  Closures at work

var outerVar = 'Outer';
function makeInner(params) {
    var innerVar = 'Inner';

    function inner() {
	console.log(
	    `I can see: ${outerVar}, ${innerVar}, and ${params}`);
    }
    return inner;
}

var inner = makeInner('Params');
inner();
// I can see: Outer, Inner, and Params
