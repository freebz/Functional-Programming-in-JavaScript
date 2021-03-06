// Listing 5.7  IO monad

class IO {
    constructor(effect) {
	if (!_.isFunction(effect)) {
	    throw 'IO Usage: function required';
	}
	this.effect = effect;
    }

    static of(a) {
	return new IO( () => a );
    }

    static from(fn) {
	return new IO(fn);
    }

    map(fn) {
	var self = this;
	return new IO(function () {
	    return fn(self.effect());
	});
    }

    run() {
	return this.effect();
    }
}
