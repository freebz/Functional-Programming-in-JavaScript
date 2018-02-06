// 2.3 Functions

// 2.3.1 Functions as first-class citizens

function multiplier(a,b) {
    return a * b;
}



var square = function (x) {
    return x * x;
}

var square = x => x * x;



var obj = {
    method: function (x) { return x * x; }
};



square;
// function (x) {
//     return x * x;
// }



var multiplier = new Function('a', 'b', 'return a * b');

multiplier(2, 3); //-> 6



var fruit = ['Coconut', 'apples'];
fruit.sort(); //->['Coconut', 'apples']

var ages = [1, 10, 21, 2];
ages.sort(); //->[1, 10, 2, 21]



people.sort((p1, p2) => p1.getAge() - p2.getAge());
