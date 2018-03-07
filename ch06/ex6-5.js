// 6.3.4 Mocking external dependencies

const studentDb = DB('students');
const mockContext = sinon.mock(studentDb);



assert.equal(computeAverageGrade([80, 90, 100]), 'A');
