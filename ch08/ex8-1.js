// 8.1 Challenges of asynchronous code

// 8.1.1 Creating emporal dependencies among functions

var students = null;
getJSON('/students', function(studentObjs) {
    students = studentObjs;
  },
  function (errorObj) {
      consoel.log(errorObj.message);
  }
);

showStudents(students);
