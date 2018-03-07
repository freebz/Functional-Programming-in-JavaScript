// Listing 6.5  JSCheck test for checkLengthSsn

QUnit.test('JSCheck Custom Specifier for SSN', function (assert) {
    JSC.clear();

    JSC.on_report((report) => trace('Report'+ str));
    JSC.on_pass((object) => assert.ok(object.pass));

    JSC.on_fail((object) =>
		assert.ok(object.pass || object.args.length === 9,
			  'Test failed for: ' + object.args));

    JSC.test(
	'Check Length SSN',
	function (verdict, ssn) {
	    return verdict(checkLengthSsn(ssn));
	},
	[
	    JSC.SSN(JSC.integer(100, 999), JSC.integer(10, 99),
		    JSC.integer(1000,9999))
	],
	function (ssn) {
	    return 'Testing Custom SSN: ' + ssn;
	}
    );
});
