// 6.5 Measuring effectiveness through code coverage

// 6.5.1 Measuring the effecteveness of testing functional code

QUnit.test('Imperative showStudent with valid user', function (assert) {
    const result = showStudent('444-44-4444');
    assert.equal(result, '444-44-4444, Alonzo, Church');
});



QUnit.test('Imperative Show Student with null', function (assert) {
    const result = showStudent(null);
    assert.equal(result, null);
});



QUnit.test('Functional Show Student with null', function (assert) {
    const result = showStudent(null).run();
    assert.ok(result.isNothing);
});
