// 7.1 Under the hood of function execution

executionContextData = {
    scopeChain,
    variableObject,
    this
}



// 7.1.1 Currying and the function contet stack

const logger = function (appender, layout, name, level, message)



const logger =
      function (appender) {
	  return function (layout) {
	      return function (name) {
		  return function (level) {
		      return function (message) {
	      ...



const add = function (a, b) {
    return a + b;
};

const c_add = curry2(add);

const input = _.range(80000);

addAll(input, add);   //->511993600000000
addAll(input, c_add); //-> browser halts

function addAll(arr, fn) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {
	    result += fn(arr[i], arr[j]);
	}
    }
    return result;
}
