// Listing 6.3  Mocking the external dependency of findStudent

var studentStore, mockContext;

QUnit.module('CH06',
{    
    beforeEach: function() {
	studentDb = DB('students');
	mockContext = sinon.mock(studentDb);
    },
    afterEach: function() {
	mockContext.verify();
	mockContext.restore();
    }
});

QUnit.test('showStudent: findStudent returning null',
   function (assert) {

       mockContext.expects('get').once().returns(null);

       const findStudent = safefetchRecord(studentStore);

       assert.ok(findStudent('xxx-xx-xxxx').isLeft);
   });

QUnit.test('showStudent: findStudent returning valid object',
   function (assert) {

       mockContext.expects('get').once().returns(
	   new Student('Alonzo', 'Church', 'Princeton'),
	   setSsn('444-44-4444'));

       const findStudent = safefetchRecord(studentStore);

       assert.ok(findStudent('444-44-4444').isRight);
   });
