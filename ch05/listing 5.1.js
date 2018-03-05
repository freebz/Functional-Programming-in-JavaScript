// Listing 5.1  Functional data type to wrap values

class Wrapper {
    constructor(value) {
	this.value = value;
    }

    // map :: (A -> B) -> A -> B
    map(f) {
	return f(this.value);
    };

    toString() {
	return 'Wrapper (' + this.value + ')';
    }
}

// wrap :: A -> Wrapper(A)
const wrap = (val) => new Wrapper(val);
