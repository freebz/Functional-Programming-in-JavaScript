// 8.1.2 Falling into a callback pyramid

var students = null;
getJSON('/students',
  function(students) {
      showStudents(students);
  },
  function (error) {
      console.log(error.message);
  }
);
