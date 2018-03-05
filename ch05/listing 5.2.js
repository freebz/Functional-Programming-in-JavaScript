// Listing 5.2  Chaining functors to apply addtional behavior to a given context

const two = wrap(2);
two.fmap(plus3).fmap(R.tap(infoLogger)); //-> Wrapper(5)
