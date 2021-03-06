// Listing 6.2  Unit testing pure components of showStudent

QUnit.test('showStudent: cleanInput', function (assert) {

    const input = ['', '-44-44-', '44444', '    4    ', '   4-4   '];
    const assertions = ['', '4444', '44444', '4', '44'];

    assert.expect(input.length);
    input.forEach(function (val, key) {
	assert.equal(cleanInput(val), assertions[key]);
    });
});

QUnit.test('showStudent: checkLengthSsn', function (assert) {

    assert.ok(checkLengthSsn('444444444').isRight);
    assert.ok(checkLengthSsn('').isLeft);
    assert.ok(checkLengthSsn('44444444').isLeft);
    assert.equal(checkLengthSsn('444444444').chain(R.length), 9);
});

QUnit.test('showStudent: csv', function (assert) {

    assert.equal(csv(['']), '');
    assert.equal(csv(['Alonzo']), 'Alonzo');
    assert.equal(csv(['Alonzo', 'Church']), 'Alonzo,Church');
    assert.equal(csv(['Alonzo', '', 'Church']), 'Alonzo,,Church');
});
