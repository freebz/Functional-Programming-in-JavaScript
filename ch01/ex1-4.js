// 1.2.3 Referential transparency and substitutability

var counter = 0;

function increment() {
    return ++counter;
}



var increment = counter => counter + 1;



Program = [Input] + [func1, func2, func3, ...] -> Output



var input = [80, 90, 100];
var average = (arr) => divide(sum(arr), size(arr));
average (input); //-> 90



var average = divide(270, 3); //-> 90



var sum = (total, current) => total + current;
var total = arr => arr.reduce(sum);
var size = arr => arr.length;
var divide = (a, b) => a / b;
var average = arr => divide(total(arr), size(arr));
average(input); //-> 90
