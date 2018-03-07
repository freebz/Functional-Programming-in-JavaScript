// 6.3 Testing functional code

// 6.3.1 Treating a function as a black box

// 6.3.2 Focusing on business logic instead of control flow

QUnit.test('Compute Average Grade: toLetterGrade', function (assert) {

    assert.equal(toLetterGrade(90), 'A');
    assert.equal(toLetterGrade(200),'A');
    assert.equal(toLetterGrade(80), 'B');
    assert.equal(toLetterGrade(89), 'B');
    assert.equal(toLetterGrade(70), 'C');
    assert.equal(toLetterGrade(60), 'D');
    assert.equal(toLetterGrade(59), 'F');
    assert.equal(toLetterGrade(-20),'F');
});


QUnit.test('Functional Combinator: fork', function (assert) {

    const timesTwo = fork((x) => x + x, R.identity, R.identity);
    assert.equal(timesTwo(1), 2);
    assert.equal(timesTwo(2), 4);
});
