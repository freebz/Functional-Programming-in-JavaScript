// 8.3 Lazy data generation


R.range(1, Infinity).take(1); //-> [1]
R.range(1, Infinity).take(3); //-> [1,2,3]



for (let n of range(1, Infinity)) {
    console.log(n);
}



function *range(start = 0, finish = Number.POSITIVE_INFINITY) {
    for(let i = start; i < finish; i++) {
	yield i;
    }
}

const num = range(1);
num.next().value; //-> 1
num.next().value; //-> 2
num.next().value; //-> 3

// or

for (let n of range(1)) {
    console.log(n);
    if(n === threshold) {
	break;
    }
}// -> 1,2,3,...



function take(amount, generator) {
    let result = [];
    for (let n of generator) {
	result.push(n);
	if(n === amount) {
	    break;
	}
    }
    return result;
}
take(3, range(1, Infinity)); //-> [1, 2, 3]



function *range(specification, start = 0,
		finish = Number.POSITIVE_INFINITY) {

    for(let i = start; i < finish; i++) {
	yield specification(i);
    }
}

for (let n of range(x => x * x, 1, 4)) {
    console.log(n);
}// -> 1,4,9,16
