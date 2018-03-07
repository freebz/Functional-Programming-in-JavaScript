// Listing 6.6  Custom JSC.SSN specifier

/**
 * Produces a valid social security string (with dashes)
 * @param param1 Area Number   -> JSC.integer(100, 999)
 * @param param2 Group Number  -> JSC.integer(10, 99)
 * @param param3 Serial Number -> JSC.integer(1000,9999)
 * @returns {Function} Specifier function
 */
JSC.SSN = function (param1, param2, param3) {
    return function generator() {
	const part1 = typeof param1 === 'function'
	      ? param1() : param1;

	const part2 = typeof param2 === 'function'
	      ? param2() : param2;

	const part3 = typeof param3 === 'function'
	      ? param3() : param3;

	return [part1, part2, part3].join('-');
    };
};
