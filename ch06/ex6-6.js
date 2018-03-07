// 6.4 Capturing specifications with property-based testing

QUnit.test('Compute Average Grade', function (assert) {
    assert.equal(computeAverageGrade([80 90, 100]), 'A');
    assert.equal(computeAverageGrade([80, 85, 89]), 'B');
    assert.equal(computeAverageGrade([70, 75, 79]), 'C');
    assert.equal(computeAverageGrade([60, 65, 69]), 'D');
    assert.equal(computeAverageGrade([50, 55, 59]), 'F');
    assert.equal(computeAverageGrade([-10]),        'F');
});



JSC.claim(name, predicate, specifiers, classifier)
