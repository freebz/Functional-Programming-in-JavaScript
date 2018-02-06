// 2.4.3 A pseudo-block scope

if (someCondition) {
    var myVar = 10;
}



function doWork() {
    if (!myVar) {
	var myVar = 10;
    }
    console.log(myVar); //-> 10
}
doWork();



for(let i = 0; i < arr.length; i++) {
    // ...
}

i; // i === undefined
