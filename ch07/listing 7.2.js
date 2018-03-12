// Listing 7.2  Using tap to add performance timing calls

const start = () => performance.now();

const end = function (start) {
    let end = performance.now();
    return (end - start).toFixed(3);
};

const test = function (fn, input) {
    return () => fn(input);
};

const testRot13 =
      IO.of(start)
      .map(R.tap(start('rot13')))
      .map(R.tap(test(
	  rot13,
	  'functional_js_50_off'
      )))
      .map(end);

testRot13.run(); // 0.733 ms
testRot13.run() // second time: 0.021 ms
