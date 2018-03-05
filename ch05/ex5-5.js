// 5.2.2 Functors explained

const plus = R.curry((a, b) => a + b);
const plus3 = plus(3);



const two = wrap(2);



const five = two.fmap(plus3); //-> Wrapper(5)
five.map(R.identity); //-> 5



const plus10 = plus(10);
two.fmap(plus3).fmap(plus10); //-> Wrapper(15)



wrap('Get Functional').fmap(R.identity); //-> Wrapper('Get Functional')



two.fmap(R.compose(plus3, R.tap(infoLogger))).map(R.identity); //-> 5



$('#student-info').fadeIn(3000).text(student.fullname());
