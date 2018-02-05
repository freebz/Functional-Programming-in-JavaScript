// 1.2.4 Preserving Immutable data

var sortDesc = function (arr) {
    return arr.sort(function (a, b) {
	return b - a;
    });
}



var arr = [1,2,3,4,5,6,7,8,9];
sortDesc(arr); //-> [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
