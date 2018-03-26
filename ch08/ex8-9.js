// 8.3.2 The Iterator protocol

function range(start, end) {

    return {
	[Symbol.iterator]() {
	    return this;
	},
	next() {
	    if(start < end) {
		return { value: start++, done:false };
	    }
	    return { done: true, value: end };
	}
    };
}



function squares() {
    let n = 1;
    return {
	[Symbol.iterator]() {
	    return this;
	},
	next() {
	    return { value: n * n++ };
	}
    };

}



var iter = ['S', 't', 'r', 'e', 'a', 'm'][Symbol.iterator]();
iter.next().value; // S
iter.next().value; // t



var iter = 'Stream'[Symbol.iterator]();
iter.next().value// -> s
iter.next().value// -> t
