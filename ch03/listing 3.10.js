// Listing 3.10  Performing recursive addition

function sum(arr) {
    if(_.isEmpty(arr)) {
	return 0;
    }
    return _.first(arr) + sum(_.rest(arr));
}
sum([]); //-> 0
sum([1,2,3,4,5,6,7,8,9]); //-> 45
