// Listing 5.3  Wrapper monad

class Wrapper {
    constructor(value) {
	this.value = value;
    }

    static of(a) {
	return new Wrapper(a);
    }

    map(f) {
	return Wrapper.of(f(this.value));
    }

    join() {
	if(!(this.value instanceof Wrapper)) {
	    return this;
	}
	return this.value.join();
    }

    toString() {
	return `Wrapper (${this.value})`;
    }
}
