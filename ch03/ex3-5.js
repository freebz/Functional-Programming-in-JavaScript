// 3.3.2 Transforming data with _.map

var result = [];
var persons = [p1, p2, p3, p4];
for(let i = 0; i < persons.length; i++) {
    var p = persons[i];
    if(p !== null p !== undefined) {
	result.push(p.fullname);
    }
}



_.map(persons,
      s => (s !== null && s !== undefined) ? s.fullname : ''
);



_(persons).reverse().map(
    p => (p !== null && p !== undefined) ? p.fullname : ''
);
