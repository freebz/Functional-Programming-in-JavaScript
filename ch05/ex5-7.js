// 5.3.1 Monads: from control flow to data flow

Wrapper(2).fmap(half); //-> Wrapper(1)
Wrapper(3).fmap(half); //-> Wrapper(1.5)



const Empty = function (_) {
    ;
};

// map :: (A -> B) -> A -> B
Empty.prototype.map = function() { return this; };

// empty :: _ -> Empty
const empty = () => new Empty();



const isEven = (n) => Number.isFinite(n) && (n % 2 == 0);
const half = (val) => isEven(val) ? wrap(val / 2) : empty();

half(4); //-> Wrapper(2)
half(3); //-> Empty



half(4).fmap(plus3); //-> Wrapper(5)
half(3).fmap(plus3); //-> Empty



Wrapper.of('Hello Monads!')
    .map(R.toUpper)
    .map(R.identity); //-> Wrapper('HELLO MONADS!')



Wrapper.of(Wrapper.of(Wrapper.of('Get Functional'))).join();

//-> Wrapper('Get Functional')



R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);

//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
