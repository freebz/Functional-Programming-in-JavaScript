// 5.2 Building a better solution: functors

// 5.2.1 Wrapping unsafe values

const wrappedValue = wrap('Get Functional');
wrappedValue.map(R.identity); //-> 'Get Functional'



wrappedValue.map(log);
wrappedValue.map(R.toUpper); //-> 'GET FUNCTIONAL'



const wrappedNull = wrap(null);
wrappedNull.map(doWork);



// fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
Wrapper.prototype.fmap = function (f) {
    return wrap(f(this.value));
};
