// 3.5 Learning to think recursively

// 3.5.1 What is recursion?

// 3.5.2 Learning to think recursively

var acc = 0;
for(let i = 0; i < nums.length; i++) {
    acc += nums[i];
}



_(nums).reduce((acc, current) => acc + current, 0);



function sum(arr, acc = 0) {
    if(_.isEmpty(arr)) {
	return 0;
    }
    return sum(_.rest(arr), acc + _.first(arr));
}
